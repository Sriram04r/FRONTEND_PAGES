import { Eye, EyeOff, User, Hash, Mail, Phone, Building, BookOpen, Calendar, Info, Lock, Camera } from 'lucide-react';
import { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const MyProfile = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-4 pb-12 animate-in fade-in duration-500">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">My Profile</h1>
        <p className="text-sm text-slate-500 mt-1">View and manage your personal information.</p>
      </div>

      {/* Top Card */}
      <Card className="shadow-sm border-none bg-white rounded-3xl overflow-hidden">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="relative">
            <div 
              className="w-20 h-20 rounded-full bg-[#5b21b6] text-white text-3xl font-bold flex items-center justify-center shadow-md overflow-hidden cursor-pointer"
              onClick={handleImageClick}
            >
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                "S"
              )}
            </div>
            <button 
              className="absolute bottom-0 right-0 bg-[#1e1b4b] text-white p-1.5 rounded-full border-2 border-white cursor-pointer hover:bg-[#5b21b6] transition-colors"
              onClick={handleImageClick}
            >
              <Camera className="w-3.5 h-3.5" />
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageChange} 
              accept="image/*" 
              className="hidden" 
            />
          </div>
          <h2 className="text-lg font-bold text-slate-900 mt-4">Siva Kumar</h2>
          <p className="text-sm font-medium text-slate-600 mt-1">Roll No: 23B210AH13</p>
          <p className="text-sm font-medium text-slate-600 mt-1">3rd Year | CSM</p>
          <p className="text-sm font-medium text-slate-600 mt-1 mb-5">KIET</p>
          
          <Button className="w-full bg-[#5b21b6] hover:bg-[#4c1d95] text-white rounded-xl h-11">
            Edit Profile
          </Button>
        </CardContent>
      </Card>

      {/* Personal Information Card */}
      <Card className="shadow-sm border-none bg-white rounded-3xl overflow-hidden">
        <CardHeader className="pb-2 pt-6 px-6">
          <CardTitle className="text-lg font-bold text-slate-900">Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <div className="space-y-4 mt-2">
            {[
              { icon: User, label: 'Full Name', value: 'Siva Kumar' },
              { icon: Hash, label: 'Roll Number', value: '23B210AH13' },
              { icon: Mail, label: 'Email', value: 'sivakumar@example.com' },
              { icon: Phone, label: 'Mobile Number', value: '9876543210' },
              { icon: Building, label: 'College', value: 'KIET' },
              { icon: BookOpen, label: 'Branch', value: 'CSM' },
              { icon: Calendar, label: 'Year', value: '3rd Year' },
              { icon: Info, label: 'Section', value: 'Hostel' },
            ].map((item, index) => (
              <div key={index} className="flex items-start text-sm">
                <div className="flex items-center gap-3 w-36 shrink-0 text-slate-700 font-medium">
                  <item.icon className="w-4 h-4 text-slate-800" />
                  {item.label}
                </div>
                <div className="text-slate-400 mx-2">:</div>
                <div className="text-slate-700 font-medium flex-1">{item.value}</div>
              </div>
            ))}
            
            <div className="flex items-center text-sm pt-1">
              <div className="flex items-center gap-3 w-36 shrink-0 text-slate-700 font-medium">
                <Lock className="w-4 h-4 text-slate-800" />
                Account Status
              </div>
              <div className="text-slate-400 mx-2">:</div>
              <div className="flex-1">
                <Badge className="bg-emerald-100/80 text-emerald-700 hover:bg-emerald-100 border-none shadow-none font-semibold px-3">Active</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Change Password Card */}
      <Card className="shadow-sm border-none bg-white rounded-3xl overflow-hidden">
        <CardHeader className="pb-4 pt-6 px-6">
          <CardTitle className="text-lg font-bold text-slate-900">Change Password</CardTitle>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <div className="relative">
              <Input 
                type={showCurrent ? "text" : "password"} 
                placeholder="Current Password" 
                className="pr-10 h-11 rounded-xl bg-slate-50 border-slate-100 focus:bg-white text-sm font-medium"
              />
              <button 
                type="button" 
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#5b21b6] transition-colors"
              >
                {showCurrent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <div className="relative">
              <Input 
                type={showNew ? "text" : "password"} 
                placeholder="New Password" 
                className="pr-10 h-11 rounded-xl bg-slate-50 border-slate-100 focus:bg-white text-sm font-medium"
              />
              <button 
                type="button" 
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#5b21b6] transition-colors"
              >
                {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <div className="relative">
              <Input 
                type={showConfirm ? "text" : "password"} 
                placeholder="Confirm New Password" 
                className="pr-10 h-11 rounded-xl bg-slate-50 border-slate-100 focus:bg-white text-sm font-medium"
              />
              <button 
                type="button" 
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#5b21b6] transition-colors"
              >
                {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <Button className="w-full bg-[#5b21b6] hover:bg-[#4c1d95] text-white h-11 rounded-xl mt-2">
              Update Password
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyProfile;

