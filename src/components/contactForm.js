import React from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Muy corto!")
    .max(50, "Muy largo!")
    .required("Requerido"),
  email: Yup.string()
    .email("Email no válido")
    .required("Requerido"),
  message: Yup.string()
    .min(2, "Muy corto!")
    .max(1000, "Máximo 1000 caracteres")
    .required("Requerido"),
})

const ContactForm = () => {
  const [form, setForm] = React.useState(1)
  return (
    <>
      <div className={form === 1 ? "block" : "hidden"}>
        <h5 className="mb-2 font-semibold tracking-wider text-white uppercase md:mb-6">
          Contáctanos
        </h5>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, actions) => {
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "contact-demo", ...values }),
            })
              .then(() => {
                setForm(2)
                actions.resetForm()
              })
              .catch(() => {
                alert("Error")
              })
              .finally(() => actions.setSubmitting(false))
            console.log(values)
          }}
        >
          {({ errors, touched }) => (
            <Form className="mt-4" name="contact-demo" data-netlify={true}>
              <div className="md:flex md:justify-between md:space-x-4">
                <div className="mb-4 md:w-2/5">
                  <Field
                    placeholder="Nombre"
                    className="block w-full px-4 py-3 leading-tight text-white border rounded appearance-none border-primary-600 bg-secondary-500 focus:outline-none focus:bg-secondary-900"
                    name="name"
                  />
                  {errors.name && touched.name ? (
                    <div className="pl-4 text-red-400">{errors.name}</div>
                  ) : null}
                </div>
                <div className="mb-4 md:w-3/5">
                  <Field
                    placeholder="Email"
                    className="block w-full px-4 py-3 leading-tight text-white border rounded appearance-none border-primary-600 bg-secondary-500 focus:outline-none focus:bg-secondary-900"
                    name="email"
                    type="email"
                  />
                  {errors.email && touched.email ? (
                    <div className="pl-4 text-red-400">{errors.email}</div>
                  ) : null}
                </div>
              </div>
              <div className="mb-4">
                <Field
                  placeholder="Mensaje"
                  className="block w-full h-24 px-2 pt-2 leading-tight text-white border rounded appearance-none border-primary-600 bg-secondary-500 focus:outline-none focus:bg-secondary-900"
                  name="message"
                  component="textarea"
                />
                {errors.message && touched.message ? (
                  <div className="pl-4 text-red-400">{errors.message}</div>
                ) : null}
              </div>
              <button
                className="w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out rounded shadow-sm bg-primary-600 hover:bg-primary-500"
                type="submit"
              >
                Enviar
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div
        className={
          form === 2
            ? "text-center block w-full px-4 py-20 font-light leading-tight text-white border rounded border-primary-600 bg-secondary-500"
            : "hidden"
        }
      >
        <p className="pb-4">Tu mensaje ha sido enviado!</p>
        <span>
          Gracias por contactarte con nosotros, si deseas puedes {""}
          <a
            onClick={e => {
              e.preventDefault()
              setForm(1)
            }}
            className="underline cursor-pointer text-primary-200 hover:text-primary-500"
            type="submit"
          >
            enviar otro mensaje
          </a>
        </span>
      </div>
    </>
  )
}
export default ContactForm
