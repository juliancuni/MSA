export default {
  en: {
    home: { titulli: "Hello!", njoftim: "Under Construction" },
    about: { titulli: "Hello!", njoftim: "Under Construction" },
    login: { titulli: "Login", button: "Login" },
    regjistro: { titulli: "Regsiter" },
    rikupero: { titulli: "Recover your Password", udhezim: "Please enter your email below. We will send you a message shortly with instructions to recover your password." },
    rikuperoUpdate: { titulli: "Reset your Password", udhezim: "Please use the form below to create a new password. Remember that it must be at least 6 characters long. It's recommended that you use uppercase and lowercase letters, numbers, and non-alphanumeric characters." },

    auth: {
      links: {
        homepage: "Home",
        rikupero: "Recover Password",
        kontakt: "Contact"
      },
    },
    ui: {
      button: {
        ruaj: "Save",
        login: "Login",
        regjistro: "Register",
        dergoEmail: "Send Email",
        resetFjalekalimin: "Reset Password"
      },
      input: {
        email: { label: "Email", placeholder: "email@domain.com" },
        perdoruesiOseEmail: { label: "Email or Username", placeholder: "email@domain.com or johndoe" },
        fjalekalimi: { label: "Password", placeholder: "Min. 6 char" },
        fjalekalimiPrape: { label: "Repeat", placeholder: "Repeat Password" },
        emriPlote: { label: "Full Name", placeholder: "Your full name" },
        perdoruesi: { label: "Username", placeholder: "johndoe" },
      },
      alerts: {
        kontakt: {
          titulli: "Contact Form",
          mesazhi: "Under Construction"
        },
        login: {
          titulli: "Login Failed",
          mesazhi: ""
        },
        logout: {
          titulli: "Logout Failed",
          mesazhi: ""
        },
        regjistro: {
          titulli: "Register Failed",
          mesazhi: ""
        },
        rikupero: {
          titulli: "Password Recovery Failed",
          mesazhi: ""
        },
        krijoRikuperoSukses: {
          titulli: "Recover Password",
          mesazhi: "In your email address<br>we've sent the instruction to recover your password. <br>Please check your email and follow the instructions there.",
        },
        rikuperoFailExpired: {
          titulli: "Expired!",
          mesazhi: "Password Recovery Link expired"
        },
        rikuperoFailParams: {
          titulli: "Wrong Params!",
          mesazhi: "UserId or Secret Missing<br>Check your link and try again"
        },
        rikuperoSukses: {
          titulli: "Ok!",
          mesazhi: "New Password saved successfuly!"
        },
        krijoVerifikimSukses: {
          titulli: "Email Verification",
          mesazhi: "We've sent a verification link in your mail. Please check your email and follow the instructions there to activate your account.",
        },
        verifikim: {
          titulli: "Email Verification Failed",
          mesazhi: ""
        },
        emailJoIVerifikuar: {
          titulli: "Email Not Verified!",
          mesazhi: `Please open your email.<br> There you'll find a message from us with the instructions on how to verify your email. <br> Please check your spam folder in case you missed it`,
          action: "Resend Email"
        }
      },
      validation: {
        inputbosh: "Cannot be empty",
        emailFormat: "Email format error",
        fjalekalimiShkurter: "Password should be at least 6 characters long",
        fjalekalimetNukPerputhen: "Passwords doesn't match"
      }
    },

    profile: {
      titulli: "Profile for ",
      emriPlote: "Full Name",
      perdoruesi: "Username",
      fjalekalimi: "Password",
      email: "Email",
      telefon: "Telephone",
      adresa: "Adress",
      kartaIdentitetit: "Id Card",
      gjinia: "Gender",
    },
  },
  sq: {
    home: { titulli: "Përshendetje!", njoftim: "Në ndërtim" },
    about: { titulli: "Përshendetje!", njoftim: "Në ndërtim" },
    login: { titulli: "Login", button: "Login" },
    regjistro: { titulli: "Regjistrohuni" },
    rikupero: { titulli: "Rikupero fjalëkalimin", udhezim: "Ju lutemi vendosni email-in tuaj më poshtë. Do ju dërgojmë një mesazh me udhëzimet përkatëse për të rikuperuar fjalëkalimin." },
    rikuperoUpdate: { titulli: "Reset fjalëkalimin", udhezim: "Ju lutemi përdorni formën më poshtë për të krijuar fjalëkalimin e ri. Mos harroni se fjalëkalimi duhet të jetë të paktën 6 karaktere i gjatë. Rekomandohet që të përdorni gërma të mëdha dhe të vogla, numra dhe karaktere të tjera jo-alfanumerike" },

    auth: {
      links: {
        homepage: "Kreu",
        rikupero: "Rikupero Fjalëkalimin",
        reset: "Reset",
        kontakt: "Kontakt"
      },
    },
    ui: {
      button: {
        ruaj: "Ruaj",
        login: "Login",
        regjistro: "Regjistrohuni",
        dergoEmail: "Dërgo Email",
        resetFjalekalimin: "Reset Fjalëkalimin"
      },
      input: {
        email: { label: "Email", placeholder: "email@domain.com" },
        perdoruesiOseEmail: { label: "Email ose Perdoruesi", placeholder: "psh: email@domain.com ose alibuba " },
        fjalekalimi: { label: "Fjalëkalimi", placeholder: "Të paktën 6 karaktere" },
        fjalekalimiPrape: { label: "Përserite", placeholder: "Përsërit Fjalëkalimin" },
        emriPlote: { label: "Emri i Plotë", placeholder: "Emer Mbiemer" },
        perdoruesi: { label: "Përdoruesi", placeholder: "psh: alibuba" }
      },
      alerts: {
        kontakt: {
          titulli: "Forma e Kontaktit",
          mesazhi: "Në ndërtim"
        },
        login: {
          titulli: "Login Dështoi",
          mesazhi: ""
        },
        logout: {
          titulli: "Logout Dështoi",
          mesazhi: ""
        },
        regjistro: {
          titulli: "Register Dështoi",
          mesazhi: ""
        },
        rikupero: {
          titulli: "Rikupero Fjalëkalimin Dështoi",
          mesazhi: ""
        },
        krijoRikuperoSukses: {
          titulli: "Rikupero Fjalëkalimin",
          mesazhi: "Në adresën tuaj të emailit<br> dërguam udhëzimet për të rikuperuar fjalëkalimin. <br>Hapni adresën tuaj dhe ndiqni udhëzimet aty.",
        },
        rikuperoFailExpired: {
          titulli: "Skaduar!",
          mesazhi: "Ky link ka skaduar. Provoni sërish"
        },
        rikuperoFailParams: {
          titulli: "Parametrat Gabim!",
          mesazhi: "Linku ka gabime. UserId ose Sekreti mungojnë<br>Kontrolloni link-un dhe provoni sërish"
        },
        rikuperoSukses: {
          titulli: "Ok!",
          mesazhi: "Fjalëkalimi i ri u ruajt me sukses!"
        },
        krijoVerifikimSukses: {
          titulli: "Emaili i verifikimit",
          mesazhi: "Në adresën tuaj ë emailit<br> dërguam linkun e konfirmimit. <br>Hapni adresën dhe ndiqni udhezimet për të aktivizuar llogarinë që sapo krijuat.",
        },
        verifikim: {
          titulli: "Verifikimi i Email Dështoi",
          mesazhi: ""
        },
        emailJoIVerifikuar: {
          titulli: "Email i PaVerifikuar!",
          mesazhi: `Ju lutemi hapni emailin.<br> Aty do të gjeni udhezimet për të vazhduar. <br> Nëse mesazhi ynë nuk gjendet në inbox, kontrolloni në spam`,
          action: "Ridërgo Email"
        },
      },
      validation: {
        inputbosh: "S'mund të lihet bosh",
        emailFormat: "Formati i Email-it gabim",
        fjalekalimiShkurter: "Fjalëkalimi duhet të jetë të paktën 6 karaktere",
        fjalekalimetNukPerputhen: "Fjalëkalimet nuk përputhen"
      }
    },
    profile: {
      titulli: "Profili për ",
      emriPlote: "Emri i Plotë",
      perdoruesi: "Përdoruesi",
      fjalekalimi: "Fjalëkalimi",
      email: "Email",
      telefon: "Telefon",
      adresa: "Adresa",
      kartaIdentitetit: "Kartë Identiteti",
      gjinia: "Gjinia",
    },
  },
}

  // Ç ç Ë ë