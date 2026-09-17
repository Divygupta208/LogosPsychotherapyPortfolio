import service1 from '../../public/images/service-1.avif'
import service2 from '../../public/images/service-2.avif'
import service3 from '../../public/images/service-3.avif'
import service4 from '../../public/images/service-4.avif'
import sandBg from '../../public/images/sandbg.png'

export interface ServiceItem {
  id: string
  title: string
  subtitle: string
  summary: string
  description: string
  fullDescription: string[]
  benefits: string[]
  whoItsFor: string
  approach: string
  image: string
}

export const servicesData: ServiceItem[] = [
  {
    id: 'trauma',
    title: 'Trauma Therapy',
    subtitle: 'Healing deeply rooted wounds and restoring internal safety',
    summary: 'Process overwhelming experiences, release stored tension, and regain safety, control, and emotional wholeness.',
    description:
      'Trauma occurs when we go through something so overwhelming, frightening, or painful that our mind and body struggle to fully process it. It can come from a single event or ongoing stress.',
    fullDescription: [
      'Trauma occurs when we go through something so overwhelming, frightening, or painful that our mind and body struggle to fully process it. It can come from a single acute event, such as an accident, loss, or violence, or from ongoing systemic experiences, such as difficult childhood environments or chronic relationship distress.',
      'Trauma is not a sign of weakness. It is a natural biological response to experiences that felt too much at the time. When traumatic memories remain unprocessed, they can manifest as hypervigilance, anxiety, flashbacks, emotional numbness, or physical distress.',
      'Through trauma-informed psychotherapy and EMDR techniques, we create a safe, compassionate space to process painful memories. Our goal is to help your nervous system release stored tension, integrate past experiences, and restore a steady sense of internal safety and peace.',
    ],
    benefits: [
      'Reduce physical tension and nervous system reactivity',
      'Process stuck memories without reliving past distress',
      'Restore a grounded sense of safety and self-control',
      'Develop healthier coping mechanisms for triggers',
      'Reconnect with present-moment clarity and peace',
    ],
    whoItsFor:
      'Individuals experiencing lingering distress from past events, single-incident trauma, childhood adversity, or emotional wounds that impact daily life.',
    approach:
      'Integration of EMDR (Eye Movement Desensitization & Reprocessing), Somatic Experiencing, and compassionate narrative therapy tailored to your pace.',
    image: service1,
  },
  {
    id: 'anxiety-depression',
    title: 'Anxiety & Depression',
    subtitle: 'Easing constant worry, lifting emotional weight, and renewing hope',
    summary: 'Calm constant worry, ease emotional fatigue, and gradually restore inner balance, vitality, and hope.',
    description:
      'Anxiety can feel like an internal alarm stuck on, while depression feels like a heavy weight. Together, they impact mind and body, making daily life exhausting.',
    fullDescription: [
      'Anxiety and depression are natural yet deeply exhausting human experiences that affect both mind and body. Anxiety often presents as an internal alarm stuck on—bringing constant worry, racing thoughts, restlessness, and muscle tension.',
      'Depression, on the other hand, can feel like a heavy emotional weight marked by fatigue, loss of interest in once-loved activities, fog, and lingering feelings of hopelessness. Together or individually, they can make it hard to feel grounded or hopeful.',
      'In our therapy sessions, we meet these feelings with empathy rather than judgment. We work to understand what your anxiety or depression is communicating, calm the nervous system, challenge unhelpful cognitive patterns, and rebuild energy, balance, and a renewed sense of purpose.',
    ],
    benefits: [
      'Soothe racing thoughts and physical anxiety symptoms',
      'Rebuild energy and motivation at a manageable pace',
      'Understand root causes of mood fluctuations',
      'Cultivate practical tools for emotional regulation',
      'Foster self-compassion and sustainable hope',
    ],
    whoItsFor:
      'Anyone struggling with chronic worry, panic, low energy, persistent sadness, overwhelm, or feeling stuck in cycles of stress and exhaustion.',
    approach:
      'Cognitive Behavioral principles integrated with Existential inquiry, mindfulness grounding, and body-oriented emotion regulation.',
    image: service2,
  },
  {
    id: 'grief-loss',
    title: 'Grief & Loss',
    subtitle: 'Meeting loss with compassion and honoring what was lost',
    summary: 'Process painful loss at your own pace, honor cherished bonds, and gradually reconnect with meaning.',
    description:
      'Grief and loss touch every part of your inner world. Therapy creates a gentle space to honor what was lost and navigate the non-linear path of healing.',
    fullDescription: [
      'Grief and loss are deeply human experiences that touch every layer of your inner world. Grief rarely follows a neat, predictable timeline; it often arrives in unpredictable waves of sadness, longing, anger, numbness, or confusion.',
      'Loss can mean the death of a loved one, but it also encompasses major life transitions, broken relationships, loss of health, or shattered expectations. It can shift your identity, sense of security, and purpose.',
      'Therapy provides a sacred, unhurried space to grieve without pressure to "move on." We honor what has been lost, create room to process complex emotions, and support you in finding a meaningful way to carry your experience while gradually reconnecting with life.',
    ],
    benefits: [
      'Express complex grief in a non-judgmental environment',
      'Honor and integrate the memory of what was lost',
      'Navigate feelings of numbness, guilt, or isolation',
      'Discover steady ways to navigate waves of sorrow',
      'Rebuild a meaningful life alongside grief',
    ],
    whoItsFor:
      'Individuals navigating the loss of a loved one, relationship dissolution, life changes, career loss, or ambiguous losses that feel difficult to carry alone.',
    approach:
      'Compassionate existential grief counseling, narrative reflection, and gentle emotional processing.',
    image: service3,
  },
  {
    id: 'attachment-relationships',
    title: 'Attachment Work & Relationships',
    subtitle: 'Understanding relational patterns and building authentic security',
    summary: 'Understand relational blueprints, repair attachment wounds, build healthier boundaries, and deepen authentic connection.',
    description:
      'Our earliest relationships shape how we experience trust and connection. Attachment work helps build emotional security and healthy boundaries.',
    fullDescription: [
      'Our earliest relationships create the foundational blueprint for how we experience trust, intimacy, safety, and connection throughout our adult lives. When those early bonds were anxious, unpredictable, or distant, adult relationships can feel fraught with fear of abandonment or engulfment.',
      'You might notice patterns of people-pleasing, difficulty setting boundaries, fear of conflict, or repeatedly ending up in emotionally draining relationships.',
      'Through attachment-based psychotherapy, we explore these relational blueprints with compassion. By understanding your attachment style and healing relational wounds, you can build steady internal security, establish healthier boundaries, and cultivate deep, authentic connections.',
    ],
    benefits: [
      'Identify and understand your attachment style',
      'Set clear, confident boundaries without guilt',
      'Break destructive relational cycles and patterns',
      'Develop authentic self-worth and internal security',
      'Foster deeper intimacy and mutual trust in relationships',
    ],
    whoItsFor:
      'Individuals seeking healthier relationship dynamics, recovering from codependency, navigating boundary challenges, or wanting to break repetitive relationship patterns.',
    approach:
      'Attachment-Focused Psychotherapy, Somatic Attachment Work, and Emotionally Focused exploration.',
    image: service4,
  },
  {
    id: 'emdr-therapy',
    title: 'EMDR Therapy Online',
    subtitle: 'Reprocessing traumatic memories through targeted bilateral stimulation',
    summary: 'Targeted EMDR therapy online to reprocess trauma, reduce emotional distress, and promote adaptive brain healing.',
    description:
      'EMDR uses eye movements or bilateral stimulation to help the brain safely process stuck traumatic memories without reliving the past.',
    fullDescription: [
      'Eye Movement Desensitization and Reprocessing (EMDR) is a scientifically validated, highly effective therapeutic approach designed to help the brain heal from traumatic memories and distressing life events.',
      'When difficult experiences occur, the brain can struggle to process the event fully. The memory remains "stuck" in its raw, emotional form, continually triggering anxiety, fear, or physical reactivity whenever remembered or triggered.',
      'During online EMDR therapy, we use guided eye movements or auditory bilateral stimulation to help the brain reprocess these memories. Rather than reliving past trauma, EMDR enables your nervous system to store the memory adaptively—releasing emotional intensity and allowing new clarity and peace to emerge.',
    ],
    benefits: [
      'Desensitize painful traumatic triggers and memories',
      'Achieve deep healing without needing to talk extensively about trauma details',
      'Reduce physical hyperarousal and panic responses',
      'Transform negative beliefs ("I am unsafe") into empowering truths',
      'Convenient, secure online therapy from your comfortable environment',
    ],
    whoItsFor:
      'Anyone experiencing PTSD, trauma, severe phobias, panic, performance anxiety, or deeply rooted negative self-beliefs resulting from past events.',
    approach:
      'Standard 8-Phase EMDR Protocol delivered online using specialized secure bilateral stimulation tools.',
    image: sandBg,
  },
]
