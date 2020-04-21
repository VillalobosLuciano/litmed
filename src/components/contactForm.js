import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"



const ContactForm = () => {
  const [form, setForm] = React.useState(1)
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  return (
    <div>
      <div className={form === 1 ? "block" : "hidden"}>
        <h5 className="font-semibold tracking-wider uppercase">Contáctanos</h5>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
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
          }}
          validate={values => {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            const errors = {}
            if (!values.name) {
              errors.name = "Se requiere su nombre"
            }
            if (!values.email || !emailRegex.test(values.email)) {
              errors.email = "Email no valido"
            }
            if (!values.message) {
              errors.message = "Se requiere un mensaje"
            }
            return errors
          }}
        >
          {() => (
            <Form className="mt-4" name="contact-demo" data-netlify={true}>
              <div htmlFor="name" className="flex flex-wrap mb-4">
                <Field
                  placeholder="Nombre"
                  className="block w-full px-4 py-3 leading-tight text-white border rounded appearance-none border-primary-600 bg-secondary-500 focus:outline-none focus:bg-secondary-900"
                  name="name"
                />
                <ErrorMessage name="name" />
              </div>
              <div className="flex flex-wrap mb-4" htmlFor="email">
                <Field
                  placeholder="Email"
                  className="block w-full px-4 py-3 leading-tight text-white border rounded appearance-none border-primary-600 bg-secondary-500 focus:outline-none focus:bg-secondary-900"
                  name="email"
                />
                <ErrorMessage name="email" />
              </div>

              <div className="mb-4" htmlFor="message">
                <Field
                  placeholder="Mensaje"
                  className="block w-full h-24 px-2 pt-2 leading-tight text-white border rounded appearance-none border-primary-600 bg-secondary-500 focus:outline-none focus:bg-secondary-900"
                  name="message"
                  component="textarea"
                />
                <ErrorMessage name="message" />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="w-full px-6 py-3 text-xs font-semibold leading-6 text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-500 focus:outline-none focus:shadow-outline-red sm:text-sm sm:leading-5"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
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
        <p className="pb-4" >Su mensaje ha sido enviado!</p>
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
    </div>
  )
}

export default ContactForm
