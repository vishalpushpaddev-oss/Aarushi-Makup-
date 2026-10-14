/**
 * Aarushi Makeup Studio & Academy — Enquiry Google Form setup
 *
 * Kaise chalayein:
 *  1. https://script.google.com par jaakar "New project" banayein.
 *  2. Ye poora code paste karein aur Save karein.
 *  3. Upar function dropdown me "createEnquiryForm" chunein aur Run dabayein.
 *     (Pehli baar Google permission maangega — Allow kar dein.)
 *  4. View > Logs (ya Execution log) me jo CONFIG print hoga, use copy karke
 *     website ki file  frontend/src/config/googleForm.js  me paste karein.
 *  5. Har nayi enquiry par WhatsApp + email alert ke liye "setupAlerts" Run karein
 *     (neeche WHATSAPP SETUP dekhein).
 *
 * ⚠️ Form ek baar ban chuka hai to createEnquiryForm DOBARA mat chalayein —
 *    warna naya form ban jaayega aur website ke entry IDs badal jaayenge.
 *
 * ---------------- WHATSAPP SETUP (CallMeBot, free) ----------------
 * Jis-jis number par alert chahiye, us number ke WhatsApp se ye karein:
 *  a. Phone me contact save karein:  +34 644 26 33 77  (koi bhi naam)
 *  b. Us contact ko WhatsApp par bhejein:  I allow callmebot to send me messages
 *  c. 1-2 minute me reply aayega: "...Your APIKEY is 123456" — ye key note karein.
 *     (2 minute me reply na aaye to 24 ghante baad dobara try karein.)
 *  d. Neeche WHATSAPP_RECIPIENTS me number aur key daalein, Save karein.
 *  e. "testWhatsApp" Run karke check karein, phir "setupAlerts" Run karein.
 * Note: CallMeBot ka free API personal use ke liye hai — sirf aapke apne
 * (activate kiye hue) numbers par message jaata hai, customers ko nahi.
 */

// ---- Settings: zarurat ho to yahan badlein ----
const FORM_TITLE = 'Aarushi Makeup Studio & Academy — Enquiries';
const SHEET_TITLE = 'Aarushi Studio — Enquiries (Responses)';

// Har number ki apni CallMeBot API key hoti hai. Ek se zyada number add kar sakte hain.
const WHATSAPP_RECIPIENTS = [
  { name: 'Alerts', phone: '+918965037988', apikey: '' }, // ← CallMeBot se mili APIKEY yahan daalein
  // Doosra number bhi chahiye to us phone se bhi activate karke yahan add karein:
  // { name: 'Studio', phone: '+918460461764', apikey: '' },
];

const SEND_EMAIL = true; // email alert bhi chahiye to true
const ALERT_EMAIL = ''; // khaali chhodein to script chalane wale account par email jaayega

// Agar ye code kisi NAYE Apps Script project me paste kiya hai, to form ka ID yahan daalein
// (form ke edit link me /forms/d/<YE_ID>/edit). Purane project me khaali chhod sakte hain.
const FORM_EDIT_ID = '';

// Website ke form me jo options hain, wahi yahan bhi hone chahiye (spelling same).
const EVENT_OPTIONS = [
  'Bridal',
  'Engagement / Reception',
  'Haldi / Mehendi',
  'Party / Family',
  'Photoshoot',
  'Academy course',
];

function createEnquiryForm() {
  const form = FormApp.create(FORM_TITLE)
    .setDescription('Website (aarushi studio) se aayi booking aur academy enquiries.')
    .setCollectEmail(false)
    .setAllowResponseEdits(false)
    .setLimitOneResponsePerUser(false)
    .setShowLinkToRespondAgain(true)
    .setConfirmationMessage('Thank you! Aapki enquiry mil gayi hai. Hum jaldi WhatsApp par reply karenge.');

  // Note: required/validation jaan-boojh kar website par rakha hai, yahan nahi —
  // taaki website se aane wala koi response reject na ho.
  const name = form.addTextItem().setTitle('Name');
  const phone = form.addTextItem().setTitle('Phone / WhatsApp');
  const event = form.addMultipleChoiceItem().setTitle('Booking type');
  event.setChoices(EVENT_OPTIONS.map((o) => event.createChoice(o))).showOtherOption(true);
  const date = form.addDateItem().setTitle('Event date').setIncludesYear(true);
  const city = form.addTextItem().setTitle('City / Venue');
  const message = form.addParagraphTextItem().setTitle('Message');
  const source = form.addTextItem().setTitle('Source page');

  // Responses ke liye Google Sheet banakar link karein
  const sheet = SpreadsheetApp.create(SHEET_TITLE);
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  // Entry IDs nikalne ke liye ek prefilled URL banate hain (ye response submit nahi hota)
  const prefill = form
    .createResponse()
    .withItemResponse(name.createResponse('x'))
    .withItemResponse(phone.createResponse('x'))
    .withItemResponse(event.createResponse(EVENT_OPTIONS[0]))
    .withItemResponse(date.createResponse(new Date(2030, 0, 1)))
    .withItemResponse(city.createResponse('x'))
    .withItemResponse(message.createResponse('x'))
    .withItemResponse(source.createResponse('x'))
    .toPrefilledUrl();

  const ids = [...prefill.matchAll(/entry\.(\d+)=/g)].map((m) => 'entry.' + m[1]);
  if (ids.length !== 7) throw new Error('Entry IDs nahi mile: ' + prefill);

  const config = {
    actionUrl: form.getPublishedUrl().replace(/\/viewform.*$/, '/formResponse'),
    fields: {
      name: ids[0],
      phone: ids[1],
      event: ids[2],
      date: ids[3],
      city: ids[4],
      message: ids[5],
      source: ids[6],
    },
  };

  PropertiesService.getScriptProperties().setProperty('FORM_ID', form.getId());

  Logger.log('================ DONE ================');
  Logger.log('Form (edit):     ' + form.getEditUrl());
  Logger.log('Form (public):   ' + form.getPublishedUrl());
  Logger.log('Responses sheet: ' + sheet.getUrl());
  Logger.log('');
  Logger.log('👇 Ye CONFIG copy karke website ki file frontend/src/config/googleForm.js me paste karein:');
  Logger.log('export const GOOGLE_FORM = ' + JSON.stringify(config, null, 2));
}

/**
 * Har nayi enquiry (form submit) par onEnquiry chalane wala trigger lagata hai.
 * Ek hi baar chalana hai. Dobara chalane par purana trigger hata kar naya lagata hai.
 */
function setupAlerts() {
  const formId = FORM_EDIT_ID || PropertiesService.getScriptProperties().getProperty('FORM_ID');
  if (!formId) throw new Error('Form ID nahi mila. Upar FORM_EDIT_ID me form ka ID daalein.');
  ScriptApp.getProjectTriggers()
    .filter((t) => t.getHandlerFunction() === 'onEnquiry')
    .forEach((t) => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('onEnquiry').forForm(FormApp.openById(formId)).onFormSubmit().create();
  Logger.log('Alerts ON ✅  (WhatsApp: ' + activeRecipients().length + ' number, email: ' + (SEND_EMAIL ? 'on' : 'off') + ')');
}

// Purane naam se bhi chal jaaye
function setupEmailAlerts() {
  setupAlerts();
}

/** Trigger yahi function chalata hai — har nayi enquiry par. */
function onEnquiry(e) {
  const items = e.response.getItemResponses();
  const get = (title) => {
    const r = items.find((x) => x.getItem().getTitle() === title);
    return r ? String(r.getResponse()).trim() : '';
  };
  const enquiry = {
    name: get('Name'),
    phone: get('Phone / WhatsApp'),
    event: get('Booking type'),
    date: formatDate(get('Event date')),
    city: get('City / Venue'),
    message: get('Message'),
    source: get('Source page'),
    time: Utilities.formatDate(e.response.getTimestamp(), 'Asia/Kolkata', 'dd MMM yyyy, hh:mm a'),
  };

  // Ek alert fail ho to doosra phir bhi jaaye
  try {
    sendWhatsApp(buildWhatsAppText(enquiry));
  } catch (err) {
    console.error('WhatsApp alert failed: ' + err);
  }
  if (SEND_EMAIL) {
    try {
      sendEmail(enquiry, items);
    } catch (err) {
      console.error('Email alert failed: ' + err);
    }
  }
}

function buildWhatsAppText(q) {
  const waLink = customerWaLink(q.phone);
  return [
    '🔔 *New Enquiry — Aarushi Studio*',
    '',
    `👤 *Name:* ${q.name || '-'}`,
    `📞 *Phone:* ${q.phone || '-'}`,
    `💄 *Booking:* ${q.event || '-'}`,
    q.date ? `📅 *Event date:* ${q.date}` : null,
    q.city ? `📍 *City/Venue:* ${q.city}` : null,
    q.message ? `📝 *Note:* ${q.message}` : null,
    '',
    waLink ? `💬 Customer ko reply: ${waLink}` : null,
    `🕒 ${q.time}${q.source ? ' · ' + q.source : ''}`,
  ]
    .filter((line) => line !== null)
    .join('\n');
}

/** CallMeBot ke through har active number par message bhejta hai. */
function sendWhatsApp(text) {
  const list = activeRecipients();
  if (!list.length) {
    console.warn('WHATSAPP_RECIPIENTS me koi API key nahi hai — WhatsApp skip.');
    return;
  }
  list.forEach((r, i) => {
    if (i > 0) Utilities.sleep(1500); // numbers ke beech thoda gap
    const url =
      'https://api.callmebot.com/whatsapp.php' +
      '?phone=' + encodeURIComponent(r.phone.replace(/\s/g, '')) +
      '&text=' + encodeURIComponent(text) +
      '&apikey=' + encodeURIComponent(r.apikey);
    const res = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    const body = res.getContentText().replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`WhatsApp → ${r.name} (${r.phone}): HTTP ${res.getResponseCode()} — ${body.slice(0, 160)}`);
  });
}

function sendEmail(q, items) {
  const to = ALERT_EMAIL || Session.getEffectiveUser().getEmail();
  const rows = items
    .map((r) => `<tr><td style="padding:6px 12px;color:#76655f">${r.getItem().getTitle()}</td><td style="padding:6px 12px"><b>${r.getResponse() || '-'}</b></td></tr>`)
    .join('');
  const waLink = customerWaLink(q.phone);
  MailApp.sendEmail({
    to,
    subject: `New enquiry: ${q.name || 'Website'} — ${q.event}`,
    htmlBody:
      `<h2 style="font-family:Georgia,serif">New website enquiry</h2><table>${rows}</table>` +
      (waLink ? `<p><a href="${waLink}">Customer ko WhatsApp par reply karein</a></p>` : ''),
  });
}

/** Test: ek sample alert sabhi WhatsApp numbers par bhejta hai. Setup ke baad ek baar chalayein. */
function testWhatsApp() {
  sendWhatsApp(
    buildWhatsAppText({
      name: 'Test Customer',
      phone: '9999999999',
      event: 'Bridal',
      date: formatDate('2026-12-15'),
      city: 'Mhow',
      message: 'Ye ek test alert hai ✅',
      source: 'Apps Script test',
      time: Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd MMM yyyy, hh:mm a'),
    }),
  );
}

// ---- helpers ----
function activeRecipients() {
  return WHATSAPP_RECIPIENTS.filter((r) => r.phone && r.apikey);
}

/** "2026-12-15" → "15 Dec 2026" */
function formatDate(value) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value || '');
  if (!m) return value || '';
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${+m[3]} ${months[+m[2] - 1]} ${m[1]}`;
}

/** Customer ke number ka click-to-chat link (10 digit Indian number par +91 laga deta hai). */
function customerWaLink(phone) {
  let digits = String(phone || '').replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1);
  if (digits.length === 10) digits = '91' + digits;
  return digits.length >= 11 ? 'https://wa.me/' + digits : '';
}
