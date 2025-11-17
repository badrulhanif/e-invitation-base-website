export function sendEmailTemplate() {
  return `
  <!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet">

<div style="background: linear-gradient(to bottom right, #242615, #2E2D19, #342814, #3A2312, #1F1812, #2B2623); padding:24px;">
  <div style="max-width:600px; margin:0 auto; text-align:center; font-family:Arial,sans-serif; color:#ffffff; background-color: rgba(255,255,255,0.05); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.15); border-radius:16px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
    <div style="padding:36px;">


      <!-- Header -->
      <h2 style="margin:0 0 16px; font-family:'Marcellus', serif; font-size:24px; font-weight:500px; color:#ffffff;">Birthday Sayang Celebration</h2> 

      <!-- Intro paragraph -->
      <p style="margin:0 0 36px; font-size:16px; color:rgba(255,255,255,0.8); line-height:1.5;">
      You’ve been invited to a day full of pleasure and surprises… <br />
       A day made for laughs, heat, and moments that’ll leave you breathless.
      </p>
      
       <!-- Body -->
      <div style="margin-bottom:36px; line-height:1.5; text-align:center;">
  <!-- Initiary title -->
  <p style="margin:4px 0; font-family:'Marcellus', serif; font-size:24px; color:#ffffff;">
    Initiary
  </p>
  
  <!-- Initiary schedule -->
  <ul style="list-style:none; padding:0; margin:8px 0; color:rgba(255,255,255,0.85); font-size:16px; line-height:1.6;">
    <li style="font-style: italic;">I will pick you up</li>
    <li style="font-style: italic;">We arrive at the venue</li>
    <li style="font-style: italic;">Eat & Celebration</li>
    <li style="font-style: italic;">Party & Funs</li>
    <li style="font-style: italic;">End of celebration / Drop off</li>
  </ul>
</div>

  <!-- CTA -->
   <div style="text-align:center; margin:24px 0;"> <!-- // simplified container -->
  <div style="margin-bottom:12px;"> <!-- // wrapper for spacing -->
    <a
      href="https://e-invitation-v1.vercel.app/api/apple-calendar"
      target="_blank"
      rel="noreferrer noopener"
      style="display:inline-block; width:260px; text-align:center; padding:12px 24px; border-radius:9999px; font-size:16px; box-shadow:0 4px 12px rgba(0,0,0,0.1); border:1px solid rgba(255,255,255,0.15); background-color:rgba(255,255,255,0.8); color:#713f2a; text-decoration:none;"
    >
       Add to Apple Calendar
    </a>
  </div>
  <div> <!-- second button wrapper -->
    <a
      href="https://e-invitation-v1.vercel.app/api/google-calendar"
      target="_blank"
      rel="noreferrer noopener"
      style="display:inline-block; width:260px; text-align:center; padding:12px 24px; border-radius:9999px; font-size:16px; box-shadow:0 4px 12px rgba(0,0,0,0.1); border:1px solid rgba(255,255,255,0.15); background-color:rgba(255,255,255,0.8); color:#713f2a; text-decoration:none;"
    >
      𝐆 Add to Google Calendar
    </a>
  </div>
</div>

      <!-- Footer -->
      <div style="color:rgba(255,255,255,0.6); text-align:center; font-size:14px;">
        <p style="margin:4px 0;">By Your Sayang</p>
        <p style="margin:4px 0;">I can’t wait to play with you and make you smile.</p>
      </div>

    </div>
  </div>
</div>
  `;
}
