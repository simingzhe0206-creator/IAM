import { motion, useReducedMotion } from 'motion/react';

const milestones = [
  {
    number: '01',
    title: 'Project introduction',
    text: 'Send the site address, project type and required survey service.'
  },
  {
    number: '02',
    title: 'Review and quotation',
    text: 'IAM confirms the requirements, scope of work and quotation.'
  },
  {
    number: '03',
    title: 'Survey and preparation',
    text: 'The survey team attends site and prepares the required plans and documents.'
  },
  {
    number: '04',
    title: 'Documentation support',
    text: 'IAM supports the relevant council, certifier and registration documentation.'
  }
];

export function ProjectTimeline() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mt-4">
      <div className="absolute bottom-auto left-5 top-6 h-[calc(100%-3rem)] w-px bg-[#fffdf0]/16 lg:left-0 lg:right-0 lg:top-[3.35rem] lg:h-px lg:w-full" />
      <motion.div
        className="absolute left-5 top-6 h-[calc(100%-3rem)] w-px origin-top bg-[#f4e00c] lg:hidden"
        initial={reduceMotion ? false : { scaleY: 0 }}
        whileInView={reduceMotion ? undefined : { scaleY: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute left-0 top-[3.35rem] hidden h-px w-full origin-left bg-[#f4e00c] lg:block"
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={reduceMotion ? undefined : { scaleX: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
        {milestones.map((milestone, index) => (
          <motion.article
            key={milestone.number}
            className="relative grid grid-cols-[2.5rem_1fr] gap-5 lg:block lg:pt-0"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#f4e00c]/60 bg-[#262522] text-xs font-extrabold text-[#f4e00c] lg:mt-[2.15rem]">
              {milestone.number}
            </div>
            <div className="lg:mt-7">
              <h3 className="text-xl font-extrabold text-[#fffdf0]">{milestone.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[#e6e2d2]">{milestone.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
