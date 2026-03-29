
// === CONFIGURAZIONE PRIVATA SHELLY ===
// https://shelly-85-eu.shelly.cloud/v1/device/stats/?id=bcff4dfd05f7&auth_key=MWVmNTNmdWlk1D2ED53C10E5B83DEBC778C9166C665959FCD9011942DCE39E3D0E751BC18B9D11E61E7A595BE697&channel=0&date_range=today
const SHELLY_CONFIG = {
    SERVER_URL: "https://shelly-85-eu.shelly.cloud", // Sostituisci XX col tuo server
    AUTH_KEY: "MWVmNTNmdWlk1D2ED53C10E5B83DEBC778C9166C665959FCD9011942DCE39E3D0E751BC18B9D11E61E7A595BE697",
    DEVICE_ID: "bcff4dfd05f7",
    MAX_POWER_REF: 3000, // Watt per il colore pieno
    USE_DEMO_MODE: false, // Metti true per testare la grafica se lo Shelly è offline
    GOOGLE_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbxQwn39BH2yDaFxbZAawWDWQHQA3vohTuoqtcHipQrY6cp5ZMuht75C3pibJSM5QLVaOw/exec"
};
