import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Phone, Mail, Building, FileText, Calendar, Clock, BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';

const RequestDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate(-1)}
            className="rounded-xl shadow-sm bg-white h-10 px-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Requests
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Request Details</h1>
            <p className="text-slate-500 mt-1">Review the student's permission request and take action.</p>
          </div>
        </div>
        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 border-none shadow-none text-sm px-4 py-1.5 rounded-full flex items-center gap-2">
          <Clock className="w-4 h-4" /> Pending at CTPO
        </Badge>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-[2] space-y-6">
          <Card className="shadow-sm border-slate-200">
            <CardHeader className="border-b border-slate-100 bg-slate-50">
              <CardTitle className="text-lg">Student Information</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                <div className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0"><User className="w-5 h-5" /></div>
                    <div>
                      <div className="text-sm font-medium text-slate-500">Name</div>
                      <div className="font-semibold text-slate-900">A. Tejaswi</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 shrink-0"><FileText className="w-5 h-5" /></div>
                    <div>
                      <div className="text-sm font-medium text-slate-500">Roll Number</div>
                      <div className="font-semibold text-slate-900">23B210AH13</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0"><Building className="w-5 h-5" /></div>
                    <div>
                      <div className="text-sm font-medium text-slate-500">Year / Section</div>
                      <div className="font-semibold text-slate-900">3rd Year / Section A</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-violet-50 text-violet-600 shrink-0"><Building className="w-5 h-5" /></div>
                    <div>
                      <div className="text-sm font-medium text-slate-500">Department</div>
                      <div className="font-semibold text-slate-900">CSM</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-rose-50 text-rose-600 shrink-0"><Mail className="w-5 h-5" /></div>
                    <div>
                      <div className="text-sm font-medium text-slate-500">Email</div>
                      <div className="font-semibold text-slate-900">tejaswi23@example.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-amber-50 text-amber-600 shrink-0"><Phone className="w-5 h-5" /></div>
                    <div>
                      <div className="text-sm font-medium text-slate-500">Mobile</div>
                      <div className="font-semibold text-slate-900">9876543210</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-slate-200">
            <CardHeader className="border-b border-slate-100 bg-slate-50">
              <CardTitle className="text-lg">Permission Details</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-600 shrink-0"><BookOpen className="w-5 h-5" /></div>
                  <div>
                    <div className="text-sm font-medium text-slate-500">Permission Type</div>
                    <div className="font-semibold text-slate-900">Library Permission</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-600 shrink-0"><FileText className="w-5 h-5" /></div>
                  <div>
                    <div className="text-sm font-medium text-slate-500">Purpose</div>
                    <div className="font-semibold text-slate-900">Access library after hours</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-600 shrink-0"><Calendar className="w-5 h-5" /></div>
                  <div>
                    <div className="text-sm font-medium text-slate-500">From Date</div>
                    <div className="font-semibold text-slate-900">12 Sep 2025</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-600 shrink-0"><Calendar className="w-5 h-5" /></div>
                  <div>
                    <div className="text-sm font-medium text-slate-500">To Date</div>
                    <div className="font-semibold text-slate-900">12 Sep 2025</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-600 shrink-0"><Clock className="w-5 h-5" /></div>
                  <div>
                    <div className="text-sm font-medium text-slate-500">Time</div>
                    <div className="font-semibold text-slate-900">05:00 PM - 07:00 PM</div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 mb-6">
                <div className="text-sm font-medium text-slate-500 mb-2">Description</div>
                <div className="text-slate-900 leading-relaxed">I need to use the library for my mini project work.</div>
              </div>

              <div className="flex items-center flex-wrap gap-3">
                <span className="text-sm font-medium text-slate-500">Supporting Document :</span>
                <div className="bg-purple-50 text-purple-700 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 cursor-pointer hover:bg-purple-100 transition-colors border border-purple-100">
                  <FileText className="w-4 h-4" /> library_request.pdf
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1 space-y-6">
          <Card className="shadow-sm border-indigo-100 bg-indigo-50/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-indigo-900">Student Message</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-4 rounded-xl text-sm text-indigo-800 font-medium italic border border-indigo-100 shadow-sm relative">
                <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-t border-l border-indigo-100 rotate-45"></div>
                "I need to access the library after hours for my project work. Please approve."
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-primary/20 ring-1 ring-primary/5">
            <CardHeader className="border-b border-slate-100 bg-white">
              <CardTitle className="text-lg">Approval Action</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 mb-6">
                <label className="flex items-center gap-3 p-4 border-2 border-emerald-500 rounded-xl bg-emerald-50 cursor-pointer hover:bg-emerald-100 transition-colors relative overflow-hidden group">
                  <div className="absolute inset-0 bg-emerald-500/10 translate-y-[100%] group-hover:translate-y-0 transition-transform"></div>
                  <CheckCircle className="w-6 h-6 text-emerald-600 relative z-10" />
                  <span className="font-bold text-emerald-800 relative z-10">Approve Request</span>
                  <input type="radio" name="action" value="approve" className="ml-auto w-5 h-5 accent-emerald-600" defaultChecked />
                </label>
                
                <div className="text-xs text-center text-slate-500 font-medium px-4">
                  You will be required to provide your digital signature to approve this request.
                </div>
                
                <label className="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-xl bg-white cursor-pointer hover:border-rose-500 hover:bg-rose-50 transition-colors">
                  <XCircle className="w-6 h-6 text-slate-400" />
                  <span className="font-semibold text-slate-600">Reject Request</span>
                  <input type="radio" name="action" value="reject" className="ml-auto w-5 h-5 accent-rose-600" />
                </label>
              </div>

              <div className="space-y-2 mb-6">
                <Label className="text-slate-700">Remarks (Optional)</Label>
                <textarea 
                  className="w-full p-3 rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm resize-y"
                  placeholder="Enter any remarks..." 
                  rows={3}
                ></textarea>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" className="flex-1 rounded-xl h-12">Cancel</Button>
                <Button className="flex-[2] rounded-xl h-12 shadow-md" onClick={() => navigate('/ctpo/digital-signature')}>Proceed to Sign</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;
