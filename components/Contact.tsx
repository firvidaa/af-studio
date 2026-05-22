import { contact } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="text-sm uppercase tracking-widest text-accent">
              Contacto
            </p>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tightest leading-[0.95]">
              Cuentanos
              <br />
              en que <span className="text-accent">trabajas.</span>
            </h2>
            <p className="mt-6 text-ink-200 max-w-md">
              Respondemos en menos de 48 horas. Si tu proyecto encaja,
              proponemos siguiente paso y presupuesto cerrado.
            </p>

            <div className="mt-10 space-y-3 text-ink-100">
              <a
                href={`mailto:${contact.email}`}
                className="block text-xl md:text-2xl font-medium hover:text-lime transition-colors"
              >
                {contact.email}
              </a>
              <p className="text-ink-200">{contact.location}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {contact.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full border border-white/10 text-sm text-ink-100 hover:bg-white/5 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <form
            className="lg:col-span-6 lg:col-start-7 space-y-5"
            action={`mailto:${contact.email}`}
            method="post"
            encType="text/plain"
          >
            <Field label="Nombre" name="nombre" type="text" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Empresa (opcional)" name="empresa" type="text" />
            <div>
              <label className="block text-sm text-ink-200 mb-2">
                Cuentanos el proyecto
              </label>
              <textarea
                name="mensaje"
                rows={5}
                required
                className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-ink-50 placeholder:text-ink-300 focus:outline-none focus:border-lime transition-colors resize-none"
                placeholder="Que tienes en mente, plazos, presupuesto aproximado..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-lime text-ink-900 font-medium hover:bg-lime-400 transition-colors"
            >
              Enviar mensaje
              <span aria-hidden>-&gt;</span>
            </button>
            <p className="text-xs text-ink-300">
              Al enviar, tu cliente de correo abrira un email a {contact.email}.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm text-ink-200 mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-ink-50 placeholder:text-ink-300 focus:outline-none focus:border-lime transition-colors"
      />
    </div>
  );
}
