import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { FaCog } from "react-icons/fa";
  import { useState } from "react";
   
  export function Theme({ theme, accent, changeTheme, changeAccent }) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <FaCog className="hover:text-accent xl:text-[22px]  xl:text-white cursor-pointer transition-all duration-300"/>
        </AlertDialogTrigger>
        <AlertDialogContent>
          
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  export function ThemeMoblie({ theme, accent, changeTheme, changeAccent }) {
    
    
    return (
      <Sheet>
        <SheetTrigger asChild>
          <FaCog className="hover:text-accent text-3xl xl:text-[22px] md:text-4xl text-slate xl:text-white cursor-pointer transition-all duration-300"/>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col h-screen justify-around items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold pb-6 md:text-5xl text-white">Theme</h1>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <input type="radio" onClick={() => changeTheme('light')} checked={'light' == theme} name="theme" id="light" className="peer hidden" />
                  <label htmlFor="light" className="h-5 w-5 rounded-full border-2 border-accent peer-checked:bg-accent transition-all duration-300 cursor-pointer"></label>
                  
                  <div className="peer-checked:text-accent transition-all peer-checked:font-semibold duration-300 text-xl text-slate">Light</div>
                </div>

                <div className="flex gap-2 items-center">
                  <input type="radio" onClick={() => changeTheme('dark')} checked={'dark' == theme} name="theme" id="dark" className="peer hidden" />
                  <label htmlFor="dark" className="h-5 w-5 rounded-full border-2 border-accent peer-checked:bg-accent transition-all duration-300 cursor-pointer"></label>
                  
                  <div className="peer-checked:text-accent transition-all peer-checked:font-semibold text-xl duration-300">Dark</div>
                </div>
              </div>
              
            </div>
            <div className="">
              <h2 className="text-4xl font-bold text-center pb-6 md:text-5xl text-white">Accent Color</h2>
              <div className="flex gap-3 justify-center pb-3">
                
                <div className="">
                  <input type="radio" name="accent" id="blue" onClick={() => changeAccent('34, 183, 247', '#030912', '#94abb8', '#171d26')} checked={'34, 183, 247' == accent} className="peer hidden" />
                  <label htmlFor="blue" className="h-12 w-12 block rounded-full border-4 border-primary peer-checked:ring-2 peer-checked:ring-[#22b7f7] bg-[#22b7f7] transition-all duration-300 cursor-pointer"></label>
                  
                </div>
                <div className="">
                  <input type="radio" name="accent" id="red" onClick={() => changeAccent('239, 68, 68', '#0d0202', '#b89494', '#261717')} checked={'239, 68, 68' == accent} className="peer hidden" />
                  <label htmlFor="red" className="h-12 w-12 block rounded-full border-4 border-primary peer-checked:ring-2 peer-checked:ring-[#ef4444] bg-[#ef4444] transition-all duration-300 cursor-pointer"></label>
                  
                </div>
                <div className="">
                  <input type="radio" name="accent" id="green" onClick={() => changeAccent('34, 197, 94', '#020e07', '#94b896', '#172617')} checked={'34, 197, 94' == accent} className="peer hidden" />
                  <label htmlFor="green" className="h-12 w-12 block rounded-full border-4 border-primary peer-checked:ring-2 peer-checked:ring-[#22c55e] bg-[#22c55e] transition-all duration-300 cursor-pointer"></label>
                  
                </div>
              </div>
              <div className="flex gap-3 justify-center">
                <div className="">
                  <input type="radio" name="accent" id="yellow" onClick={() => changeAccent('234, 179, 8', '#0e0701', '#b8b794', '#262517')} checked={'234, 179, 8' == accent} className="peer hidden" />
                  <label htmlFor="yellow" className="h-12 w-12 block rounded-full border-4 border-primary peer-checked:ring-2 peer-checked:ring-[#eab308] bg-[#eab308] transition-all duration-300 cursor-pointer"></label>
                  
                </div>
                <div className="">
                  <input type="radio" name="accent" id="violet" onClick={() => changeAccent('168, 85, 247', '#09010e', '#a494b8', '#1d1726')} checked={'168, 85, 247' == accent} className="peer hidden" />
                  <label htmlFor="violet" className="h-12 w-12 block rounded-full border-4 border-primary peer-checked:ring-2 peer-checked:ring-[#a855f7] bg-[#a855f7] transition-all duration-300 cursor-pointer"></label>
                  
                </div>
                <div className="">
                  <input type="radio" name="accent" id="pink" onClick={() => changeAccent('236, 72, 153', '#0e0106', '#b894b0', '#261723')} checked={'236, 72, 153' == accent} className="peer hidden" />
                  <label htmlFor="pink" className="h-12 w-12 block rounded-full border-4 border-primary peer-checked:ring-2 peer-checked:ring-[#ec4899] bg-[#ec4899] transition-all duration-300 cursor-pointer"></label>
                 
                </div>
                
              </div>
              
            </div>
            <div className=""></div>
          </div>
        </SheetContent>
      </Sheet>
    )
  }



  
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet2"
 
