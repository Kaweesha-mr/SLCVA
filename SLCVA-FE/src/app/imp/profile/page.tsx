'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfileData {
  name: string;
  companyName: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  licenseNo: string;
}

const ProfilePage = () => {
  const [profileData, setProfileData] = React.useState<ProfileData>({
    name: '',
    companyName: '',
    description: '',
    email: '',
    phone: '',
    address: '',
    licenseNo: ''
  });

  const [passwords, setPasswords] = React.useState({
    newPassword: '',
    confirmPassword: ''
  });

  const handleProfileUpdate = (field: keyof ProfileData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProfileData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handlePasswordChange = (field: keyof typeof passwords) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswords(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Header */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src="" alt="Profile" />
                <AvatarFallback>PR</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="space-y-1">
                  <Input
                    className="text-2xl font-semibold"
                    placeholder="Name / Company Name"
                    value={profileData.name}
                    onChange={handleProfileUpdate('name')}
                  />
                  <Input
                    className="text-gray-600"
                    placeholder="Description"
                    value={profileData.description}
                    onChange={handleProfileUpdate('description')}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Details */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Personal Details</CardTitle>
            <Button variant="secondary">Edit</Button>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <Input
                placeholder="Full name"
                value={profileData.name}
                onChange={handleProfileUpdate('name')}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Address</label>
              <Input
                placeholder="Address"
                value={profileData.address}
                onChange={handleProfileUpdate('address')}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                placeholder="Email"
                value={profileData.email}
                onChange={handleProfileUpdate('email')}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone</label>
              <Input
                placeholder="Phone"
                value={profileData.phone}
                onChange={handleProfileUpdate('phone')}
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Drug Import License no</label>
              <Input
                placeholder="License number"
                value={profileData.licenseNo}
                onChange={handleProfileUpdate('licenseNo')}
              />
            </div>
          </CardContent>
        </Card>

        {/* Change Password */}
        <Card>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">New Password</label>
              <Input
                type="password"
                placeholder="Enter new password"
                value={passwords.newPassword}
                onChange={handlePasswordChange('newPassword')}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Re-enter Password</label>
              <Input
                type="password"
                placeholder="Confirm new password"
                value={passwords.confirmPassword}
                onChange={handlePasswordChange('confirmPassword')}
              />
            </div>
          </CardContent>
        </Card>

        {/* Documents */}
        <Card>
          <CardHeader>
            <CardTitle>Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square rounded-lg border-2 border-dashed border-gray-200 p-4 flex items-center justify-center">
                <Button variant="ghost">Upload</Button>
              </div>
              <div className="aspect-square rounded-lg border-2 border-dashed border-gray-200 p-4 flex items-center justify-center">
                <Button variant="ghost">Upload</Button>
              </div>
              <div className="aspect-square rounded-lg border-2 border-dashed border-gray-200 p-4 flex items-center justify-center">
                <Button variant="ghost">Upload</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
