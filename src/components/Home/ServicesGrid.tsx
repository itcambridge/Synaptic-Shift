import { motion } from 'framer-motion'
import { 
  CloudArrowUpIcon, 
  ServerIcon, 
  ShieldCheckIcon, 
  CpuChipIcon,
  ChartBarIcon,
  CogIcon,
  WrenchScrewdriverIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Cloud Strategy & Design',
    description: 'Create a comprehensive cloud transformation roadmap tailored to your business needs',
    icon: CloudArrowUpIcon,
  },
  {
    title: 'Application Transformation',
    description: 'Modernize and migrate your applications to unlock cloud-native capabilities',
    icon: CogIcon,
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Build and manage scalable, secure cloud infrastructure solutions',
    icon: ServerIcon,
  },
  {
    title: 'Cloud Security',
    description: 'Implement robust security measures to protect your cloud environment',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Edge Computing',
    description: 'Leverage edge computing for faster processing and reduced latency',
    icon: CpuChipIcon,
  },
  {
    title: 'Data Services',
    description: 'Transform your data architecture for enhanced analytics and insights',
    icon: ChartBarIcon,
  },
  {
    title: 'Managed Services',
    description: 'End-to-end management of your cloud infrastructure and applications',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: 'Network Security',
    description: 'Secure and optimize your network infrastructure for cloud environments',
    icon: LockClosedIcon,
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-[#2D2D5B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive cloud solutions to drive your digital transformation journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#1F1F3D] p-6 rounded-lg hover:bg-[#383875] transition-all cursor-pointer"
            >
              <service.icon className="h-12 w-12 text-[#A100FF] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-200">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 