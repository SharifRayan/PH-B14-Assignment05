const groups = {
  PRODUCT: ['Home', 'Technologies', 'Projects'],
  COMPANY: ['About', 'Contact', 'Careers'],
  LEGAL: ['Privacy Policy', 'Terms of Service']
};

function Footer() {
  return (
    <footer id="contact" className="mt-[75px] border-t border-[#EEF1F5] bg-white">
      <div className="mx-auto grid max-w-[1248px] gap-12 px-6 py-[67px] md:grid-cols-[1.8fr_1fr_1fr_1fr] lg:px-0">
        <div>
          <img src="/assets/logo-text.png" alt="Dev Stack" className="h-9 w-auto" />
          <p className="mt-[16px] max-w-[390px] text-[12px] leading-[1.6] text-[#8795AA]">Curated tools, technologies, and resources for developers building modern software.</p>
          <div className="mt-[22px] flex gap-[17px] text-[10px] font-medium text-[#526078]">
            <a href="#github">GitHub</a><a href="#twitter">Twitter</a><a href="#linkedin">LinkedIn</a>
          </div>
        </div>
        {Object.entries(groups).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-[11px] font-bold tracking-wide text-[#354052]">{title}</h3>
            <div className="mt-[17px] space-y-[10px]">
              {links.map((link) => <a key={link} href={`#${link.toLowerCase().replaceAll(' ', '-')}`} className="block text-[11px] text-[#8795AA]">{link}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-[#EEF1F5]">
        <div className="mx-auto flex max-w-[1248px] flex-col gap-3 px-6 py-[19px] text-[10px] text-[#A1ADBE] sm:flex-row sm:items-center sm:justify-between lg:px-0">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-7"><a href="#privacy">Privacy</a><a href="#terms">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
