
import React, { useState } from 'react';
import { Bell, Search, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NotificationsDropdown } from './NotificationsDropdown';
import { ProfileDropdown } from './ProfileDropdown';
import { MessagesSidebar } from './MessagesSidebar';
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent
} from '@/components/ui/dropdown-menu';
import { 
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose
} from '@/components/ui/drawer';
import { useMediaQuery } from '@/hooks/use-media-query';

const Header = () => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <header className="bg-white border-b border-gray-200 py-3 px-6 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="md:hidden">
          <h1 className="text-xl font-bold text-student-purple">StudentHub</h1>
        </div>
        
        <div className="hidden md:flex items-center">
          <h1 className="text-xl font-bold text-student-purple">StudentHub</h1>
        </div>
        
        <div className="flex items-center md:mx-auto bg-gray-100 rounded-full px-4 py-2 w-full max-w-xs">
          <Search size={18} className="text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent border-none outline-none w-full text-sm"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          {isDesktop ? (
            <>
              {/* Messages Dropdown - Desktop */}
              <DropdownMenu open={messagesOpen} onOpenChange={setMessagesOpen}>
                <DropdownMenuTrigger asChild>
                  <div className="relative cursor-pointer">
                    <MessageCircle size={24} className="text-gray-600 hover:text-student-purple transition-colors" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-student-purple rounded-full flex items-center justify-center text-white text-xs animate-in fade-in">2</span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80 p-0">
                  <MessagesSidebar onClose={() => setMessagesOpen(false)} />
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Notifications Dropdown - Desktop */}
              <DropdownMenu open={notificationsOpen} onOpenChange={setNotificationsOpen}>
                <DropdownMenuTrigger asChild>
                  <div className="relative cursor-pointer">
                    <Bell size={24} className="text-gray-600 hover:text-student-coral transition-colors" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-student-coral rounded-full flex items-center justify-center text-white text-xs animate-in fade-in">3</span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80 p-0">
                  <NotificationsDropdown onClose={() => setNotificationsOpen(false)} />
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Profile Dropdown - Desktop */}
              <DropdownMenu open={profileOpen} onOpenChange={setProfileOpen}>
                <DropdownMenuTrigger asChild>
                  <div className="h-8 w-8 rounded-full bg-student-purple/20 flex items-center justify-center cursor-pointer hover:bg-student-purple/30 transition-colors">
                    <span className="font-medium text-sm text-student-purple">JS</span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="p-0">
                  <ProfileDropdown onClose={() => setProfileOpen(false)} />
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              {/* Messages Drawer - Mobile */}
              <Drawer open={messagesOpen} onOpenChange={setMessagesOpen}>
                <DrawerTrigger asChild>
                  <div className="relative cursor-pointer">
                    <MessageCircle size={24} className="text-gray-600" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-student-purple rounded-full flex items-center justify-center text-white text-xs">2</span>
                  </div>
                </DrawerTrigger>
                <DrawerContent className="h-[90%] p-0">
                  <MessagesSidebar onClose={() => setMessagesOpen(false)} />
                </DrawerContent>
              </Drawer>

              {/* Notifications Drawer - Mobile */}
              <Drawer open={notificationsOpen} onOpenChange={setNotificationsOpen}>
                <DrawerTrigger asChild>
                  <div className="relative cursor-pointer">
                    <Bell size={24} className="text-gray-600" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-student-coral rounded-full flex items-center justify-center text-white text-xs">3</span>
                  </div>
                </DrawerTrigger>
                <DrawerContent className="h-[90%] p-0">
                  <NotificationsDropdown onClose={() => setNotificationsOpen(false)} />
                </DrawerContent>
              </Drawer>

              {/* Profile Drawer - Mobile */}
              <Drawer open={profileOpen} onOpenChange={setProfileOpen}>
                <DrawerTrigger asChild>
                  <div className="h-8 w-8 rounded-full bg-student-purple/20 flex items-center justify-center cursor-pointer">
                    <span className="font-medium text-sm text-student-purple">JS</span>
                  </div>
                </DrawerTrigger>
                <DrawerContent className="h-[70%] p-0">
                  <ProfileDropdown onClose={() => setProfileOpen(false)} />
                </DrawerContent>
              </Drawer>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
