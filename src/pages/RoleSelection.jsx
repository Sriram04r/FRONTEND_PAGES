import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Users, Building, ArrowRight, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const RoleSelection = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    { id: 'student', name: 'Student', icon: GraduationCap, description: 'Access dashboard and permissions', color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-200' },
    { id: 'ctpo', name: 'CTPO', icon: Users, description: 'Manage student requests', color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-200' },
    { id: 'hod', name: 'HOD', icon: Building, description: 'Approve and oversee operations', color: 'text-violet-500', bg: 'bg-violet-500/10', border: 'border-violet-200' },
    { id: 'admin', name: 'Admin', icon: Shield, description: 'System administration and settings', color: 'text-rose-500', bg: 'bg-rose-500/10', border: 'border-rose-200' }
  ];

  const handleContinue = () => {
    if (selectedRole) {
      navigate(`/login/${selectedRole}`);
    }
  };

  return (
    <Card className="w-full shadow-2xl border-none bg-white/95 backdrop-blur animate-in zoom-in-95 duration-500">
      <CardHeader className="text-center pb-8 pt-10">
        <CardTitle className="text-3xl font-extrabold tracking-tight text-slate-900">Welcome to CampusFlow</CardTitle>
        <CardDescription className="text-base text-slate-500 mt-2">
          Select your role to continue to your dashboard
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 px-8">
        {roles.map((role) => (
          <div
            key={role.id}
            onClick={() => setSelectedRole(role.id)}
            className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-200 border-2 ${
              selectedRole === role.id 
                ? `${role.border} bg-slate-50 shadow-sm scale-[1.02]` 
                : 'border-transparent bg-slate-100 hover:bg-slate-200/70 hover:scale-[1.01]'
            }`}
          >
            <div className={`p-3 rounded-lg ${role.bg} ${role.color} mr-4`}>
              <role.icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-900 text-lg">{role.name}</h3>
              <p className="text-sm text-slate-500">{role.description}</p>
            </div>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              selectedRole === role.id ? 'border-primary' : 'border-slate-300'
            }`}>
              {selectedRole === role.id && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
            </div>
          </div>
        ))}
      </CardContent>

      <CardFooter className="px-8 pb-10 pt-6">
        <Button 
          className="w-full text-lg h-14 rounded-xl shadow-lg hover:shadow-xl transition-all" 
          onClick={handleContinue}
          disabled={!selectedRole}
          size="lg"
        >
          Continue <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RoleSelection;

