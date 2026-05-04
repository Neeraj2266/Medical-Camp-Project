import { useState } from 'react'
import { useData } from '../context/DataContext'
import { useToast } from './Toast'

function PatientRegistration() {
  const { addPatient, logActivity } = useData()
  const { showToast } = useToast()

  const [form, setForm] = useState({
    pid: '', name: '', age: '', gender: '',
    regdate: '', campdate: '', contact: '', address: ''
  })
  const [errors, setErrors] = useState({})
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    let ok = true

    if (!form.pid.trim()) { newErrors.pid = 'Patient ID is required'; ok = false }
    if (!form.name.trim()) { newErrors.name = 'Name is required'; ok = false }
    if (!form.age || form.age < 0 || form.age > 130) { newErrors.age = 'Valid age required'; ok = false }
    if (!form.regdate) { newErrors.regdate = 'Registration date is required'; ok = false }
    if (!form.campdate) { newErrors.campdate = 'Camp date is required'; ok = false }
    if (!form.contact.trim()) { newErrors.contact = 'Contact is required'; ok = false }
    if (!form.address.trim()) { newErrors.address = 'Address is required'; ok = false }

    setErrors(newErrors)
    if (!ok) return

    const record = {
      pid: form.pid.trim(),
      name: form.name.trim(),
      age: form.age,
      gender: form.gender || 'Not specified',
      regdate: form.regdate,
      campdate: form.campdate,
      contact: form.contact.trim(),
      address: form.address.trim(),
      date: new Date().toLocaleDateString('en-IN'),
    }

    addPatient(record)
    logActivity('🏥', `New patient registered: ${record.name}`)
    setForm({ pid: '', name: '', age: '', gender: '', regdate: '', campdate: '', contact: '', address: '' })
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3500)
    showToast('✅ Patient registered: ' + record.name)
  }

  const handleClear = () => {
    setForm({ pid: '', name: '', age: '', gender: '', regdate: '', campdate: '', contact: '', address: '' })
    setErrors({})
  }

  return (
    <>
      <div className="section-heading">
        <h2>🏥 Patient Registration</h2>
        <p>Register new patients for medical camp services.</p>
      </div>
      <div className="form-card">
        <h3 className="form-title">New Patient Form</h3>
        <form id="patientForm" className="camp-form" noValidate onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Patient ID *</label>
              <input type="text" id="p-pid" placeholder="e.g. PID-001"
                value={form.pid} onChange={(e) => handleChange('pid', e.target.value)} />
              <span className="ferr" id="ep-pid">{errors.pid || ''}</span>
            </div>
            <div className="form-group">
              <label>Patient Name *</label>
              <input type="text" id="p-name" placeholder="Patient's full name"
                value={form.name} onChange={(e) => handleChange('name', e.target.value)} />
              <span className="ferr" id="ep-name">{errors.name || ''}</span>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Age *</label>
              <input type="number" id="p-age" placeholder="Age" min="0" max="130"
                value={form.age} onChange={(e) => handleChange('age', e.target.value)} />
              <span className="ferr" id="ep-age">{errors.age || ''}</span>
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select id="p-gender" value={form.gender} onChange={(e) => handleChange('gender', e.target.value)}>
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Date of Registration *</label>
              <input type="date" id="p-regdate"
                value={form.regdate} onChange={(e) => handleChange('regdate', e.target.value)} />
              <span className="ferr" id="ep-regdate">{errors.regdate || ''}</span>
            </div>
            <div className="form-group">
              <label>Camp Date *</label>
              <input type="date" id="p-campdate"
                value={form.campdate} onChange={(e) => handleChange('campdate', e.target.value)} />
              <span className="ferr" id="ep-campdate">{errors.campdate || ''}</span>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Contact No *</label>
              <input type="tel" id="p-contact" placeholder="+91 XXXXXXXXXX"
                value={form.contact} onChange={(e) => handleChange('contact', e.target.value)} />
              <span className="ferr" id="ep-contact">{errors.contact || ''}</span>
            </div>
            <div className="form-group">
              <label>Address *</label>
              <input type="text" id="p-address" placeholder="Full address"
                value={form.address} onChange={(e) => handleChange('address', e.target.value)} />
              <span className="ferr" id="ep-address">{errors.address || ''}</span>
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-primary">Register Patient</button>
            <button type="button" className="btn-ghost" onClick={handleClear}>Clear</button>
          </div>
        </form>
        {showSuccess && (
          <div className="form-success" id="patient-success">✅ Patient registered successfully!</div>
        )}
      </div>
    </>
  )
}

export default PatientRegistration
