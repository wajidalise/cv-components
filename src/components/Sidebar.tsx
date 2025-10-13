export const CVSidebar = () => {
  return (
    <aside className="bg-cv-sidebar text-cv-sidebar-foreground p-8 lg:min-h-screen">
      <div className="mb-8 flex justify-center">
        <div className="w-40 h-40 rounded-full overflow-hidden bg-white/10 border-4 border-white/20">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" 
            alt="Chaudhary Shahnawaz Maqsood"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4 tracking-wide border-b border-white/30 pb-2">
          ABOUT ME
        </h2>
        <p className="text-sm leading-relaxed">
          Motivated Consultant bridging Business and IT, skilled in managing Microsoft 365 content products (SharePoint, OneDrive) and supporting international teams. Experienced in digital collaboration, governance, and user support within structured, compliance-focused environments. Thrive in multicultural settings and passionate about improving organization efficiency, content management, and user experience across global organizations. Open to travel and on-site collaboration to better understand user needs and drive continuous improvement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4 tracking-wide border-b border-white/30 pb-2">
          LANGUAGES
        </h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>English</span>
            <span className="font-medium">Native</span>
          </div>
          <div className="flex justify-between">
            <span>German</span>
            <span className="font-medium">Intermediate</span>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4 tracking-wide border-b border-white/30 pb-2">
          TOOLS AND SKILLS
        </h2>
        
        <div className="mb-6">
          <h3 className="font-semibold text-sm mb-3">Tools</h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {["Confluence", "Jira", "OneDrive", "SharePoint", "Microsoft 365", "Excel", "PowerBI", "Teams", "PowerPoint", "Word", "Power Automate"].map((tool) => (
              <span key={tool} className="px-2 py-1 bg-white/10 rounded">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-sm mb-3">Core Skills</h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {["Document Organization", "Version Control", "Process Documentation", "Knowledge Sharing", "Metadata Structure", "System Optimization", "Workflow troubleshooting", "Compliance Standards", "Ticket handling", "Stakeholder Communication"].map((skill) => (
              <span key={skill} className="px-2 py-1 bg-white/10 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-3">Soft Skills</h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {["Attention to Detail", "Organizational Skills", "Communication", "Problem-Solving", "Knowledge Transfer", "Collaboration", "Adaptability"].map((skill) => (
              <span key={skill} className="px-2 py-1 bg-white/10 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4 tracking-wide border-b border-white/30 pb-2">
          PROFESSIONAL QUALIFICATIONS
        </h2>
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-semibold mb-1">Managing Microsoft SharePoint and OneDrive for Business</h3>
            <p className="text-xs text-white/80 mb-2">Coursera | Talent Program</p>
            <p className="text-xs leading-relaxed">
              Training in SharePoint and OneDrive administration, including document libraries, access control, and content governance within Microsoft 365. Developed practical skills for managing digital collaboration environments and supporting user requests.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Agile with Atlassian Jira and Confluence</h3>
            <p className="text-xs text-white/80 mb-2">Coursera | Academic Excellence</p>
            <p className="text-xs leading-relaxed">
              Comprehensive training in using Jira and Confluence for project coordination and documentation management. Covered task tracking, ticket handling, workflow creation, and collaborative content organization to support Business and IT alignment.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4 tracking-wide border-b border-white/30 pb-2">
          KEY ACHIEVEMENTS
        </h2>
        <div className="space-y-3 text-sm">
          <div>
            <h3 className="font-semibold mb-1">Talent Program</h3>
            <p className="text-xs leading-relaxed">
              Successfully supported international teams in digital collaboration tools, improving efficiency and user adoption across 50+ employees.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Government Engagement</h3>
            <p className="text-xs leading-relaxed">
              Presented business transformation findings to Abu Dhabi officials during quarterly stakeholder meetings.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-4 tracking-wide border-b border-white/30 pb-2">
          AVAILABILITY
        </h2>
        <p className="text-sm">
          Flexible to work anywhere in Germany and available to start immediately.
        </p>
      </section>
    </aside>
  );
};
