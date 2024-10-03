import { availableTemplates } from "@/constants/templates.constant";
import { Crown } from "lucide-react";
import Image from "next/image";
export default function TemplatesPage() {
  return (
    <div className="flex flex-col w-full gap-12">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold">
          Choose Your Perfect Poll Template
        </h3>
        <p className="text-sm text-gray-500">
          Explore a variety of customizable poll templates to kickstart your
          engagement. Select a design that fits your needs and get started in
          minutes.
        </p>
      </div>
      <div className="grid w-full min-h-screen grid-cols-4 gap-12">
        {availableTemplates.map((template) => {
          return (
            <div className="w-full h-fit md:w-[350px] flex flex-col gap-1 hover:border hover:border-gray-200 hover:rounded-lg p-2 pb-6">
              <Image
                src={template.thumbnail}
                alt={template.name}
                width={350}
                height={350}
                className="w-[350px] object-contain object-center rounded-lg border border-gray-200 "
              />
              <div className="flex flex-col mt-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm">{template.name}</p>
                  <p className="flex items-center p-1 text-xs bg-gray-200 rounded-md gap-1.5 ">
                    <Crown className="w-3 h-3 stroke-yellow-600" />
                    <span>{template.tag}</span>
                  </p>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  {template.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
