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
  import { FaPalette } from "react-icons/fa";
   
  export function Theme() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <FaPalette className="hover:text-accent text-3xl xl:text-[22px] md:text-4xl text-slate xl:text-white cursor-pointer transition-all duration-300"/>
        </AlertDialogTrigger>
        <AlertDialogContent>
          
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  export function ThemeMoblie() {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <FaPalette className="hover:text-accent text-3xl xl:text-[22px] md:text-4xl text-slate xl:text-white cursor-pointer transition-all duration-300"/>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col h-screen justify-around items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold pb-6 md:text-5xl text-white">Theme</h1>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <input type="radio" name="theme" id="light" className="peer hidden" />
                  <label htmlFor="light" className="h-5 w-5 rounded-full border-2 border-accent peer-checked:bg-accent transition-all duration-300 cursor-pointer"></label>
                  
                  <div className="peer-checked:text-accent transition-all peer-checked:font-semibold duration-300 text-xl">Light</div>
                </div>

                <div className="flex gap-2 items-center">
                  <input type="radio" name="theme" id="dark" className="peer hidden" />
                  <label htmlFor="dark" className="h-5 w-5 rounded-full border-2 border-accent peer-checked:bg-accent transition-all duration-300 cursor-pointer"></label>
                  
                  <div className="peer-checked:text-accent transition-all peer-checked:font-semibold text-xl duration-300">Dark</div>
                </div>
              </div>
              
            </div>
            <div className="">
              <h2 className="text-4xl font-bold text-center pb-6 md:text-5xl text-white">Accent Color</h2>
              <div className="flex gap-3 justify-center pb-3">
                
                <div className="">
                  <input type="radio" name="accent" id="blue" className="peer hidden" />
                  <label htmlFor="blue" className="h-12 w-12 block rounded-full border-4 border-primary peer-checked:ring-2 peer-checked:ring-[#22b7f7] bg-[#22b7f7] transition-all duration-300 cursor-pointer"></label>
                  
                </div>
                <div className="">
                  <input type="radio" name="accent" id="red" className="peer hidden" />
                  <label htmlFor="red" className="h-12 w-12 block rounded-full border-4 border-primary peer-checked:ring-2 peer-checked:ring-[#ef4444] bg-[#ef4444] transition-all duration-300 cursor-pointer"></label>
                  
                </div>
                <div className="">
                  <input type="radio" name="accent" id="green" className="peer hidden" />
                  <label htmlFor="green" className="h-12 w-12 block rounded-full border-4 border-primary peer-checked:ring-2 peer-checked:ring-[#22c55e] bg-[#22c55e] transition-all duration-300 cursor-pointer"></label>
                  
                </div>
              </div>
              <div className="flex gap-3 justify-center">
                <div className="">
                  <input type="radio" name="accent" id="yellow" className="peer hidden" />
                  <label htmlFor="yellow" className="h-12 w-12 block rounded-full border-4 border-primary peer-checked:ring-2 peer-checked:ring-[#eab308] bg-[#eab308] transition-all duration-300 cursor-pointer"></label>
                  
                </div>
                <div className="">
                  <input type="radio" name="accent" id="violet" className="peer hidden" />
                  <label htmlFor="violet" className="h-12 w-12 block rounded-full border-4 border-primary peer-checked:ring-2 peer-checked:ring-[#8b5cf6] bg-[#8b5cf6] transition-all duration-300 cursor-pointer"></label>
                  
                </div>
                <div className="">
                  <input type="radio" name="accent" id="pink" className="peer hidden" />
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
 
