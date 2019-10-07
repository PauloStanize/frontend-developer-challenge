import { colors } from '../styles'
import { Formik, Form, Field } from 'formik'

const CustomInput = ({ name, label, ...rest }) => (
  <div>
    <label>{label || name}</label>
    <input name={name} {...rest} />

    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
        align-items: left;
      }

      input {
        background: ${colors.secondary} 0% 0% no-repeat padding-box;
        border: 1px solid ${colors.primaryDark};
        height: 30px;
        width: 340px;
      }

      label {
        text-align: left;
        font-size: 12px;
        line-height: 14px;
        color: ${colors.primary};
        letter-spacing: 0;
        margin-bottom: 7px;
      }
    `}</style>
  </div>
)

const CustomErrorMessage = ({ message }) => (
  <div>
    {message}

    <style jsx>{`
      div {
        font-size: 14px;
        text-align: left;
        margin-top: 7px;
      }
    `}</style>
  </div>
)

export default () => {
  return (
    <section>
      <h4>Compartilhe a novidade</h4>
      <h5>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</h5>

      <Formik
        initialValues={{ name: '', email: '' }}
        validate={values => {
          let errors = {}

          Object.entries(values).map(([field, value]) => {
            if (!value)
              errors[field] = 'Campo obrigatório'
          })

          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Endereço de e-mail inválido'
          }

          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="share-form">
              <div className="input-group">
                <Field
                  name="name"
                  render={({ field, form: { errors } }) => (
                    <div>
                      <CustomInput label="Nome do seu amigo:" {...field} />
                      <CustomErrorMessage message={errors[field.name]} />
                    </div>
                  )}
                />

                <Field
                  name="email"
                  render={({ field, form: { errors } }) => (
                    <div>
                      <CustomInput label="E-mail:" {...field} />
                      <CustomErrorMessage message={errors[field.name]} />
                    </div>
                  )}
                />
              </div>

              <button type="submit" disabled={isSubmitting}>
                Enviar agora
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <style jsx>{`
        section {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex-direction: column;

          background: ${colors.secondary};
          color: ${colors.primary};
          height: 550px;
        }

        h4 {
          font-weight: bold;
          margin-bottom: 44px;
        }

        h5 {
          margin-bottom: 39px;
        }

        .share-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        button {
          background: #FFFFFF 0% 0% no-repeat padding-box;
          border: 1px solid #707070;
          border-radius: 4px;
          opacity: 1;
          height: 40px;
          width: 260px;
          display: block;
          margin-top: 50px;
        }

        .input-group {
          width: 100%;
          display: inline-grid;
          grid-template-columns: repeat(2, 340px);
          grid-column-gap: 30px;
        }
      `}</style>
    </section>
  )
}
