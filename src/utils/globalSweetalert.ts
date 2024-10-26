import Swal, { SweetAlertResult } from "sweetalert2";

export const sweetAlertSuccess = async (
  title: string = "",
  text: string = "",
  footerHtml: string = ""
): Promise<SweetAlertResult<any>> => {
  return await Swal.fire({
    icon: "success",
    title: title,
    text: text,
    footer: footerHtml
  });
}

export const sweetAlertWarning = async (
  title: string = "",
  text: string = "",
  footerHtml: string = ""
): Promise<SweetAlertResult<any>> => {
  return await Swal.fire({
    icon: "warning",
    title: title,
    text: text,
    footer: footerHtml
  });
}

export const sweetAlertError = async (title: string = "",
  text: string = "",
  footerHtml: string = ""
): Promise<SweetAlertResult<any>> => {
  return await Swal.fire({
    icon: "error",
    title: title,
    text: text,
    footer: footerHtml
  });
}

export const sweetAlertQuestion = async (
  title: string = "",
  text: string = "",
  footerHtml: string = ""
): Promise<SweetAlertResult<any>> => {
  return await Swal.fire({
    icon: "question",
    title: title,
    text: text,
    footer: footerHtml
  });
}