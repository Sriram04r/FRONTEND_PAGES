import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, ChevronDown, Upload } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const LibraryPermission = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center gap-4">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => navigate(-1)}
          className="rounded-xl shadow-sm bg-white"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Library Permission</h1>
          <p className="text-slate-500 mt-1">Fill in the details for library permission.</p>
        </div>
      </div>

      <Card className="shadow-lg border-slate-200">
        <CardHeader className="bg-slate-50 border-b border-slate-100 flex flex-row items-center gap-4 py-6">
          <div className="w-16 h-16 bg-cyan-500/10 text-cyan-600 rounded-2xl flex items-center justify-center shrink-0">
            <BookOpen className="w-8 h-8" />
          </div>
          <div>
            <CardTitle className="text-xl">Request Details</CardTitle>
            <CardDescription>Please provide accurate information for quick approval</CardDescription>
          </div>
        </CardHeader>

        <form onSubmit={e => { e.preventDefault(); navigate('/student/my-requests'); }}>
          <CardContent className="space-y-6 p-6">
            <div className="space-y-2">
              <Label htmlFor="purpose" className="text-sm font-semibold text-slate-700">
                Purpose <span className="text-rose-500">*</span>
              </Label>
              <div className="relative">
                <select 
                  id="purpose" 
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none shadow-sm"
                  required
                >
                  <option value="">Select Purpose</option>
                  <option value="access">Access Library After Hours</option>
                  <option value="borrow">Borrow Special Collection</option>
                  <option value="group">Group Study</option>
                  <option value="research">Research Work</option>
                  <option value="others">Others</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date" className="text-sm font-semibold text-slate-700">
                Date <span className="text-rose-500">*</span>
              </Label>
              <Input 
                type="date" 
                id="date" 
                className="h-12 px-4 rounded-xl shadow-sm bg-white" 
                required 
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="timeFrom" className="text-sm font-semibold text-slate-700">
                  Time From <span className="text-rose-500">*</span>
                </Label>
                <Input 
                  type="time" 
                  id="timeFrom" 
                  className="h-12 px-4 rounded-xl shadow-sm bg-white" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeTo" className="text-sm font-semibold text-slate-700">
                  Time To <span className="text-rose-500">*</span>
                </Label>
                <Input 
                  type="time" 
                  id="timeTo" 
                  className="h-12 px-4 rounded-xl shadow-sm bg-white" 
                  required 
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reason" className="text-sm font-semibold text-slate-700">
                Reason <span className="text-rose-500">*</span>
              </Label>
              <textarea 
                id="reason" 
                className="w-full p-4 rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm min-h-[120px] resize-y"
                placeholder="Enter detailed reason for library permission..."
                required
              ></textarea>
            </div>

            <div className="space-y-2 pt-2">
              <Label className="text-sm font-semibold text-slate-700">
                Attach Documents <span className="text-slate-400 font-normal">(Optional)</span>
              </Label>
              <div className="mt-2 flex justify-center rounded-xl border border-dashed border-slate-300 px-6 py-8 hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className="text-center">
                  <Upload className="mx-auto h-10 w-10 text-slate-300 group-hover:text-primary transition-colors" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-slate-600 justify-center">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none hover:text-primary/80">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-slate-500 mt-1">PDF, PNG, JPG up to 5MB</p>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="bg-slate-50 p-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4 justify-end rounded-b-xl">
            <Button 
              type="button" 
              variant="outline" 
              className="w-full sm:w-auto h-12 px-8 rounded-xl"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="w-full sm:w-auto h-12 px-8 rounded-xl shadow-md"
            >
              Submit Request
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default LibraryPermission;

