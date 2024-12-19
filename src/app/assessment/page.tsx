'use client'

import { useState, useRef } from 'react'
import ServicePageLayout from '@/components/Layout/ServicePageLayout'
import BusinessPotentialCube from '@/components/Effects/BusinessPotentialCube'

interface Question {
  id: string
  text: string
  type: 'text' | 'multiSelect' | 'yesNo' | 'slider' | 'openEnded'
  options?: string[]
  section: string
}

interface FormData {
  [key: string]: string | string[] | number
}

interface ContactDetails {
  name: string
  email: string
  company: string
  phone: string
}

export default function Assessment() {
  const [currentSection, setCurrentSection] = useState(0)
  const [formData, setFormData] = useState<FormData>({})
  const [submitted, setSubmitted] = useState(false)
  const [contactDetails, setContactDetails] = useState<ContactDetails>({
    name: '',
    email: '',
    company: '',
    phone: ''
  })
  const [showContactForm, setShowContactForm] = useState(false)
  const assessmentRef = useRef<HTMLDivElement>(null)

  const sections = [
    'Profitability: Where Do the Profits Come From?',
    'Cost Reduction: What Are the Main Costs?',
    'Overall Perspective on Innovation'
  ]

  const questions: Question[] = [
    {
      id: 'q1',
      text: 'What are the top 3 revenue-generating activities or products in your business?',
      type: 'text',
      section: 'Profitability'
    },
    {
      id: 'q2',
      text: 'What challenges do you face in scaling or optimizing these revenue-generating areas?',
      type: 'multiSelect',
      options: [
        'Difficulty forecasting demand or sales',
        'Inefficiency in production or service delivery',
        'Limited customer engagement or personalization',
        'Other'
      ],
      section: 'Profitability'
    },
    {
      id: 'q3',
      text: 'Could automating repetitive or manual processes in this area help improve efficiency or customer experience?',
      type: 'yesNo',
      section: 'Profitability'
    },
    {
      id: 'q4',
      text: 'Do you currently use any analytics or AI-powered tools to predict trends, customer behavior, or market demands?',
      type: 'multiSelect',
      options: [
        'Yes, we use: (please specify)',
        'No, but we\'re interested',
        'No, and we\'re not sure if we need it'
      ],
      section: 'Profitability'
    },
    {
      id: 'q5',
      text: 'What are your biggest cost areas in the business?',
      type: 'multiSelect',
      options: [
        'Labor (salaries, wages, benefits)',
        'Materials or supplies',
        'Marketing or customer acquisition',
        'Technology infrastructure',
        'Other'
      ],
      section: 'Cost Reduction'
    },
    {
      id: 'q6',
      text: 'Are there any repetitive or time-consuming tasks that you wish you could automate to save time and reduce labor costs?',
      type: 'text',
      section: 'Cost Reduction'
    },
    {
      id: 'q7',
      text: 'Have you explored AI-powered tools to optimize operations or reduce waste?',
      type: 'multiSelect',
      options: [
        'Yes, we already use: (please specify)',
        'No, but we\'re interested',
        'No, we don\'t see the need right now'
      ],
      section: 'Cost Reduction'
    },
    {
      id: 'q8',
      text: 'How would you rate your organization\'s readiness for innovation?',
      type: 'slider',
      section: 'Innovation'
    },
    {
      id: 'q9',
      text: 'What\'s the biggest barrier to adopting AI or advanced technology in your organization?',
      type: 'multiSelect',
      options: [
        'Budget constraints',
        'Lack of expertise or knowledge about the tools',
        'Uncertainty about the ROI of new technologies',
        'Other'
      ],
      section: 'Innovation'
    },
    {
      id: 'q10',
      text: 'If you could solve one problem in your business using technology, what would it be?',
      type: 'text',
      section: 'Innovation'
    }
  ]

  const handleInputChange = (questionId: string, value: string | string[] | number) => {
    setFormData(prev => ({
      ...prev,
      [questionId]: value
    }))
  }

  const handleContactChange = (field: keyof ContactDetails, value: string) => {
    setContactDetails(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async () => {
    // Validate contact details
    if (!contactDetails.name || !contactDetails.email || !contactDetails.company || !contactDetails.phone) {
      alert('Please fill in all contact details before submitting.')
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(contactDetails.email)) {
      alert('Please enter a valid email address.')
      return
    }

    const emailBody = `
Assessment Results:

${questions.map(q => `
${q.text}
Answer: ${formData[q.id] || 'Not answered'}
`).join('\n')}

Contact Details:
Name: ${contactDetails.name}
Email: ${contactDetails.email}
Company: ${contactDetails.company}
Phone: ${contactDetails.phone}
`

    try {
      const response = await fetch('/api/send-assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'Mark.Austin@SynapticShift.net',
          subject: 'New Business Assessment Submission',
          text: emailBody,
          replyTo: contactDetails.email
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setShowContactForm(false)
      } else {
        const errorData = await response.json()
        alert(`Failed to submit assessment: ${errorData.details || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Error sending assessment:', error)
      alert('Failed to submit assessment. Please try again later.')
    }
  }

  const currentQuestions = questions.filter(q => q.section === sections[currentSection].split(':')[0])

  const scrollToAssessment = () => {
    assessmentRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <ServicePageLayout
      title="Illuminate Your Business Potential"
      subtitle="Discover how AI and technology can transform your business"
      animation={
        <div className="absolute left-1/2 md:-top-96 -top-90 -translate-x-1/2">
          <div className="scale-75">
            <BusinessPotentialCube />
          </div>
        </div>
      }
      buttonText="Start Your Assessment"
      onButtonClick={scrollToAssessment}
    >
      <div ref={assessmentRef} className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-8 backdrop-blur-sm">
          <p className="mb-8 text-lg text-cyan-100/90">
            Are you curious about how AI and technology can drive profits and reduce costs in your business? 
            This short assessment will help you identify opportunities for growth and efficiency. 
            By answering these questions, you'll gain valuable insights into areas where cutting-edge 
            solutions could transform your business. At the end, you'll have the option to send your 
            results to our team for a personalized analysis.
          </p>

          <div className="mb-8">
            <div className="mb-4 flex justify-between">
              {sections.map((section, index) => (
                <button
                  key={section}
                  onClick={() => setCurrentSection(index)}
                  className={`rounded px-4 py-2 text-sm transition-colors duration-200 ${
                    currentSection === index
                      ? 'bg-cyan-500 text-black'
                      : 'bg-cyan-900/20 text-cyan-100/90 hover:bg-cyan-900/40'
                  }`}
                >
                  {section.split(':')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {currentQuestions.map(question => (
              <div key={question.id} className="space-y-4">
                <h3 className="text-xl font-semibold text-cyan-300">{question.text}</h3>
                {question.type === 'text' && (
                  <textarea
                    className="w-full rounded-lg border border-cyan-800/20 bg-black/30 p-3 text-cyan-100/90 placeholder-cyan-100/50 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
                    rows={3}
                    placeholder="Enter your response here..."
                    value={formData[question.id] as string || ''}
                    onChange={e => handleInputChange(question.id, e.target.value)}
                  />
                )}
                {question.type === 'multiSelect' && question.options && (
                  <div className="space-y-2">
                    {question.options.map(option => (
                      <label key={option} className="flex items-center space-x-2 text-cyan-100/90 hover:text-cyan-100">
                        <input
                          type="checkbox"
                          checked={Array.isArray(formData[question.id]) && formData[question.id].includes(option)}
                          onChange={e => {
                            const current = (formData[question.id] as string[]) || []
                            if (e.target.checked) {
                              handleInputChange(question.id, [...current, option])
                            } else {
                              handleInputChange(
                                question.id,
                                current.filter(item => item !== option)
                              )
                            }
                          }}
                          className="rounded border-cyan-800/20 bg-black/30 text-cyan-500 focus:ring-cyan-500/50"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                )}
                {question.type === 'yesNo' && (
                  <div className="flex space-x-4">
                    {['Yes', 'No', 'Not Sure'].map(option => (
                      <label key={option} className="flex items-center space-x-2 text-cyan-100/90 hover:text-cyan-100">
                        <input
                          type="radio"
                          name={question.id}
                          value={option}
                          checked={formData[question.id] === option}
                          onChange={e => handleInputChange(question.id, e.target.value)}
                          className="border-cyan-800/20 bg-black/30 text-cyan-500 focus:ring-cyan-500/50"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                )}
                {question.type === 'slider' && (
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={formData[question.id] as number || 5}
                      onChange={e => handleInputChange(question.id, parseInt(e.target.value))}
                      className="w-full accent-cyan-500"
                    />
                    <div className="flex justify-between text-sm text-cyan-100/90">
                      <span>Not ready at all</span>
                      <span>Highly ready</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between">
            <button
              onClick={() => setCurrentSection(prev => Math.max(0, prev - 1))}
              className="rounded bg-cyan-900/20 px-6 py-2 text-cyan-100/90 transition-colors duration-200 hover:bg-cyan-900/40 disabled:opacity-50"
              disabled={currentSection === 0}
            >
              Previous
            </button>
            {currentSection < sections.length - 1 ? (
              <button
                onClick={() => setCurrentSection(prev => Math.min(sections.length - 1, prev + 1))}
                className="rounded bg-cyan-500 px-6 py-2 text-black transition-colors duration-200 hover:bg-cyan-400"
              >
                Next
              </button>
            ) : (
              <button
                onClick={() => setShowContactForm(true)}
                className="rounded bg-cyan-500 px-6 py-2 text-black transition-colors duration-200 hover:bg-cyan-400"
                disabled={submitted}
              >
                Get Your Free Assessment
              </button>
            )}
          </div>

          {showContactForm && !submitted && (
            <div className="mt-8 rounded-lg border border-cyan-800/20 bg-black/30 p-6">
              <h3 className="mb-6 text-2xl font-semibold text-cyan-300">
                Get Your Free Personalized Assessment
              </h3>
              <p className="mb-6 text-cyan-100/90">
                Please provide your contact details and we'll send you a detailed analysis of how 
                we can help transform your business with AI and technology solutions.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-cyan-100/90">Name</label>
                  <input
                    type="text"
                    value={contactDetails.name}
                    onChange={e => handleContactChange('name', e.target.value)}
                    className="mt-1 w-full rounded-lg border border-cyan-800/20 bg-black/30 p-3 text-cyan-100/90 placeholder-cyan-100/50 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-cyan-100/90">Email</label>
                  <input
                    type="email"
                    value={contactDetails.email}
                    onChange={e => handleContactChange('email', e.target.value)}
                    className="mt-1 w-full rounded-lg border border-cyan-800/20 bg-black/30 p-3 text-cyan-100/90 placeholder-cyan-100/50 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-cyan-100/90">Company</label>
                  <input
                    type="text"
                    value={contactDetails.company}
                    onChange={e => handleContactChange('company', e.target.value)}
                    className="mt-1 w-full rounded-lg border border-cyan-800/20 bg-black/30 p-3 text-cyan-100/90 placeholder-cyan-100/50 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-cyan-100/90">Phone</label>
                  <input
                    type="tel"
                    value={contactDetails.phone}
                    onChange={e => handleContactChange('phone', e.target.value)}
                    className="mt-1 w-full rounded-lg border border-cyan-800/20 bg-black/30 p-3 text-cyan-100/90 placeholder-cyan-100/50 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleSubmit}
                  className="rounded bg-cyan-500 px-6 py-2 text-black transition-colors duration-200 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!contactDetails.name || !contactDetails.email || !contactDetails.company || !contactDetails.phone}
                >
                  Submit Assessment
                </button>
              </div>
            </div>
          )}

          {submitted && (
            <div className="mt-8 rounded-lg bg-cyan-500/10 p-4 text-cyan-100/90">
              <p>
                Thank you for completing the assessment! We'll review your responses and get back to you
                with a personalized analysis of how we can help transform your business.
              </p>
            </div>
          )}
        </div>
      </div>
    </ServicePageLayout>
  )
} 