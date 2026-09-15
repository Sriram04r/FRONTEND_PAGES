import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, FileText, Building, Mail, Phone, Download, Clock, Calendar, Bookmark, CheckCircle2, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';

const HODRequestDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate(-1)}
            className="rounded-xl shadow-sm bg-white h-10 px-4 text-purple-700 hover:text-purple-800 border-purple-200 hover:bg-purple-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to CSEM Requests
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Request Details</h1>
            <p className="text-slate-500 mt-1">Review the student's permission request.</p>
          </div>
        </div>
        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 border-none shadow-none text-sm px-4 py-1.5 rounded-full flex items-center gap-2">
          <Clock className="w-4 h-4" /> Pending at HOD
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
                      <div className="text-sm font-medium text-slate-500">Branch</div>
                      <div className="font-semibold text-slate-900">CSEM</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-violet-50 text-violet-600 shrink-0"><Building className="w-5 h-5" /></div>
                    <div>
                      <div className="text-sm font-medium text-slate-500">Year / Semester</div>
                      <div className="font-semibold text-slate-900">III Year / I Sem</div>
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
              <CardTitle className="text-lg">Supporting Documents</CardTitle>
              <CardDescription>Files uploaded by the student to support their request.</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                {[
                  { name: 'application_form.pdf', size: '2.4 MB' },
                  { name: 'id_card.pdf', size: '1.1 MB' },
                  { name: 'bonafide_certificate.pdf', size: '845 KB' }
                ].map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-slate-300 transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg border border-slate-200 text-purple-600 shadow-sm">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{doc.name}</div>
                        <div className="text-xs text-slate-500">{doc.size}</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-slate-400 group-hover:text-purple-600 rounded-full">
                      <Download className="w-5 h-5" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1 space-y-6">
          <Card className="shadow-sm border-slate-200">
            <CardHeader className="border-b border-slate-100 bg-slate-50 pb-4">
              <CardTitle className="text-lg">Permission Details</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-600 shrink-0"><Bookmark className="w-5 h-5" /></div>
                  <div>
                    <div className="text-sm font-medium text-slate-500">Permission Type</div>
                    <div className="font-semibold text-slate-900">Hostel</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-600 shrink-0"><Calendar className="w-5 h-5" /></div>
                  <div>
                    <div className="text-sm font-medium text-slate-500">Duration</div>
                    <div className="font-semibold text-slate-900">12 Sep 2025 - 30 Sep 2025</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-600 shrink-0"><Clock className="w-5 h-5" /></div>
                  <div>
                    <div className="text-sm font-medium text-slate-500">Applied On</div>
                    <div className="font-semibold text-slate-900">10 Sep 2025</div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50/50 rounded-xl border border-purple-100 mt-2">
                  <div className="text-sm font-medium text-purple-800 mb-2">Reason provided</div>
                  <div className="text-slate-700 italic leading-relaxed text-sm">"Need hostel accommodation for project work."</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-purple-200 ring-1 ring-purple-100">
            <CardHeader className="border-b border-slate-100 bg-white pb-4">
              <CardTitle className="text-lg">Approval Action</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button 
                  className="flex-1 rounded-xl h-12 shadow-sm bg-emerald-600 hover:bg-emerald-700 text-white" 
                  onClick={() => navigate('/hod/digital-signature')}
                >
                  <CheckCircle2 className="w-4 h-4 mr-2" /> Approve & Sign
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1 rounded-xl h-12 shadow-sm border-rose-200 text-rose-600 hover:bg-rose-50 hover:text-rose-700" 
                >
                  <XCircle className="w-4 h-4 mr-2" /> Reject
                </Button>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-700">Remarks (Optional)</Label>
                <textarea 
                  className="w-full p-3 rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-200 shadow-sm resize-y"
                  placeholder="Enter remarks to attach to this decision..." 
                  rows={3}
                ></textarea>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HODRequestDetails;

