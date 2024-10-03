"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon, CirclePlus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

export default function CreateTemplate() {
  const [date, setDate] = React.useState(new Date());
  return (
    <div className="flex w-full h-screen gap-12">
      <div className="w-2/3 bg-red-100">preview the template here</div>

      <div className="w-1/3 h-screen p-8 overflow-scroll border border-gray-200 rounded-xl">
        <div className="flex flex-col gap-1">
          <p className="text-xl font-medium">Customize the template</p>
          <p className="text-sm text-gray-500">Add your own content</p>
        </div>

        <div className="flex flex-col gap-8 mt-4">
          <div className="flex flex-col gap-3">
            <Label>Add question</Label>
            <Input type="text" placeholder="Your question will goes here..." />
          </div>

          <div className="flex flex-col gap-3">
            <Label>Description</Label>
            <Textarea placeholder="Your description will goes here..." />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <Label>Options</Label>
              <div className="flex items-center gap-2">
                <CirclePlus className="w-5 h-5 text-gray-500 cursor-pointer" />
                <p className="text-sm text-gray-500">Add option</p>
              </div>
            </div>
            <Input type="text" placeholder="Option 1" />
            <Input type="text" placeholder="Option 2" />
            <Input type="text" placeholder="Option 3" />
            <Input type="text" placeholder="Option 4" />
          </div>

          <div className="flex flex-col gap-3">
            <Label>Start Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col gap-3">
            <Label>End Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
        </div>
      </div>
    </div>
  );
}
