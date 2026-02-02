import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Users } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const interestOptions = [
  { value: 'just_reminders', label: 'Voting reminders only' },
  { value: 'volunteering', label: 'Volunteering (tabling, outreach, class presentations)' },
  { value: 'design_social', label: 'Communications support (design, social media)' },
  { value: 'strategy', label: 'Strategy and campaign planning' },
];

export const GetInvolvedSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest_area: '',
    pledge_to_vote: true,
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(`${API}/pledge`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Submission failed. Please try again.');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        interest_area: '',
        pledge_to_vote: true,
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <section 
      id="get-involved" 
      className="section-padding bg-primary"
      data-testid="get-involved-section"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-[hsl(var(--sfss-gold))] text-primary font-bold text-sm mb-6 border-2 border-white">
              TAKE ACTION
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Submit Your Pledge
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Register your commitment to vote in the 2026 referendum. You will receive a notification when the voting period commences.
            </p>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border-2 border-green-500 p-8 text-center"
                data-testid="pledge-success"
              >
                <CheckCircle className="mx-auto mb-4 text-green-600" size={48} />
                <h3 className="text-2xl font-bold text-green-700 mb-2">
                  Pledge Confirmed
                </h3>
                <p className="text-green-600">
                  Thank you for your commitment. You will receive notification when voting opens.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="pledge-form">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white font-medium">
                    Full Name <span className="text-[hsl(var(--sfss-gold))]">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white border-2 border-white h-12 text-primary placeholder:text-muted-foreground"
                    data-testid="pledge-name-input"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-medium">
                    Email Address <span className="text-[hsl(var(--sfss-gold))]">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@sfu.ca"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white border-2 border-white h-12 text-primary placeholder:text-muted-foreground"
                    data-testid="pledge-email-input"
                  />
                </div>

                {/* Interest Area */}
                <div className="space-y-2">
                  <Label className="text-white font-medium">
                    How would you like to contribute? (Optional)
                  </Label>
                  <Select
                    value={formData.interest_area}
                    onValueChange={(value) => setFormData({ ...formData, interest_area: value })}
                  >
                    <SelectTrigger 
                      className="bg-white border-2 border-white h-12 text-primary"
                      data-testid="pledge-interest-select"
                    >
                      <SelectValue placeholder="Select your preference" />
                    </SelectTrigger>
                    <SelectContent>
                      {interestOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Pledge Checkbox */}
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="pledge"
                    checked={formData.pledge_to_vote}
                    onCheckedChange={(checked) => setFormData({ ...formData, pledge_to_vote: checked })}
                    className="mt-1 border-white data-[state=checked]:bg-[hsl(var(--sfss-gold))] data-[state=checked]:border-[hsl(var(--sfss-gold))]"
                    data-testid="pledge-checkbox"
                  />
                  <Label htmlFor="pledge" className="text-white font-medium cursor-pointer">
                    I commit to voting in the 2026 referendum
                  </Label>
                </div>

                {/* Error Message */}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-red-50 border-2 border-red-300"
                    data-testid="pledge-error"
                  >
                    <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
                    <p className="text-red-700">{errorMessage}</p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-8 py-4 bg-secondary text-white font-bold text-lg border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  data-testid="pledge-submit-btn"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Submit Pledge
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Volunteer Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pt-16"
          >
            <div className="bg-white border-2 border-white p-8 shadow-hard-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[hsl(var(--sfss-gold))] flex items-center justify-center border-2 border-primary">
                  <Users size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Volunteer Opportunities</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 text-base">
                This campaign relies on student volunteers to reach the broader SFU community. The following opportunities are available:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white font-bold flex items-center justify-center text-sm">1</span>
                  <div>
                    <p className="font-bold text-primary">Campus Tabling</p>
                    <p className="text-muted-foreground text-sm">Staff information tables across campus locations (2-3 hours commitment)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white font-bold flex items-center justify-center text-sm">2</span>
                  <div>
                    <p className="font-bold text-primary">Social Media Amplification</p>
                    <p className="text-muted-foreground text-sm">Share campaign materials through your personal networks</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white font-bold flex items-center justify-center text-sm">3</span>
                  <div>
                    <p className="font-bold text-primary">Peer Outreach</p>
                    <p className="text-muted-foreground text-sm">Discuss the referendum with classmates and fellow students</p>
                  </div>
                </li>
              </ul>

              <div className="bg-[hsl(var(--sfss-gold))]/20 border-2 border-primary/20 p-4">
                <p className="text-sm text-primary">
                  <strong>To volunteer:</strong> Select your preferred role in the form and a campaign coordinator will contact you with specific opportunities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
