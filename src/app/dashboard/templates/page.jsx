import Template1 from "@/components/templates/Template1";
import Template2 from "@/components/templates/Template2";
import Template3 from "@/components/templates/Template3";
import Template4 from "@/components/templates/Template4";
import Template5 from "@/components/templates/Template5";
import Template6 from "@/components/templates/Template6";
import Template7 from "@/components/templates/Template7";

export default function TemplatesPage() {
  return (
    <div className="w-full min-h-screen p-20 mx-auto">
      <div className="flex flex-wrap items-center justify-center w-full h-full max-w-screen-xl gap-12 mx-auto">
        <Template1 />
        <Template2 />
        <Template3 />
        <Template4 />
        <Template5 />
        <Template6 />
        <Template7 />
      </div>
    </div>
  );
}
