import { motion, useReducedMotion } from 'motion/react';

const milestones = [
  {
    number: '01',
    title: 'Tell Us About Your Project',
    text: 'Email us at office@iamsurveyor.com.au with your project address, project type and survey requirements.'
  },
  {
    number: '02',
    title: 'Assessment & Quote',
    text: "We'll review your requirements, recommend the most suitable surveying service and provide a detailed quotation."
  },
  {
    number: '03',
    title: 'Survey & Documentation',
    text: 'Our surveyors complete the field survey and prepare all required plans and deliverables.'
  },
  {
    number: '04',
    title: 'Project Support',
    text: 'We continue to support your project with council, certifier, Architect and registration documentation where required.'
  }
];

export function ProjectTimeline({ images }: { images: string[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-4 border-t border-[#242321]/16">
      <div className="grid">
        {milestones.map((milestone, index) => (
          <article
            key={milestone.number}
            className="grid min-h-[300px] items-center gap-5 border-b border-[#242321]/16 py-8 md:grid-cols-2 md:gap-16 md:py-10"
          >
            <motion.div
              className={`process-number select-none ${index % 2 ? 'md:order-2 md:text-right' : ''}`}
              style={{ backgroundImage: `url(${images[index]})` }}
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={reduceMotion ? undefined : { opacity: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.75, delay: index * 0.08 }}
              aria-hidden="true"
            >
              {milestone.number}
            </motion.div>
            <motion.div
              className={`max-w-xl ${index % 2 ? 'md:order-1 md:justify-self-end' : ''}`}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.58, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#6d6a63]">Step {milestone.number}</p>
              <h3 className="mt-4 text-2xl font-extrabold text-[#242321] md:text-3xl">{milestone.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#56534e] md:text-lg md:leading-8">{milestone.text}</p>
            </motion.div>
          </article>
        ))}
      </div>
    </div>
  );
}
