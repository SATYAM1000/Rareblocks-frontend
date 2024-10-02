import Template1 from "@/components/templates/Template1";
import Template2 from "@/components/templates/Template2";
import Template3 from "@/components/templates/Template3";
import Template4 from "@/components/templates/Template4";
import Template5 from "@/components/templates/Template5";
import Template6 from "@/components/templates/Template6";
import Template7 from "@/components/templates/Template7";

export default function Home() {
  return (
    <div className="w-full min-h-screen p-20 mx-auto bg-[#1a1a1a]">
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

// --------features to be developed-----------

// 1. allow user to create new poll
// 2. different poll types
// 3. allow user to participate in a poll anonymously
// 4. Display live results as votes are cast
// 5. allow social media sharing
// 6. poll analytics
// 7. choose poll templates and customize it
// 8. poll expiry and other features
// 9. user accounts and profile
// 10. integration with other services like slack, discord, or email
// 11. export poll results as csv
// 12. allow user to get poll resulats and data directly in google sheet in real time
// 13. user feedback for improvement
// 14. schedule polls
// 15. allow user to edit and delete polls
// 16. Allow users to link their polls to a custom domain
// 17. Allow users to customize the branding of polls with their logos and colors, making it suitable for businesses or influencers.
// 18. Add support for multiple languages
// 19. Add support for multiple themes
// 20.
