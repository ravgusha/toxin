import Inputmask from "inputmask";

const maskedDateInput = document.getElementById("maskedDate");

const im = new Inputmask({ alias: "datetime", inputFormat: "dd/mm/yyyy", "placeholder": "ДД.ММ.ГГГГ"});
im.mask(maskedDateInput);
