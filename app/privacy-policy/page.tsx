import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Main Street Tech',
  description:
    'Privacy Policy for Main Street Technical Services. Learn how we collect, store, use, and share your information.',
  openGraph: {
    title: 'Privacy Policy | Main Street Tech',
    description:
      'Privacy Policy for Main Street Technical Services. Learn how we collect, store, use, and share your information.',
    url: 'https://www.mainstreettech.com/privacy-policy',
    images: [{ url: '/images/default-og.png' }],
  },
  twitter: {
    title: 'Privacy Policy | Main Street Tech',
    description:
      'Privacy Policy for Main Street Technical Services. Learn how we collect, store, use, and share your information.',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* ── Page Header ─────────────────────────────── */}
        <div className="hero-gradient text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-brand-200 text-sm font-semibold uppercase tracking-widest mb-2">Legal</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Privacy Policy</h1>
            <p className="text-brand-200 text-base">Last Updated: March 18, 2026</p>
          </div>
        </div>

        {/* ── Content ─────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="prose prose-slate max-w-none">

            {/* Disclaimer */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-10">
              <h2 className="text-lg font-bold text-slate-900 mb-3">A Legal Disclaimer</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We are so happy you found your way to our corner of the internet. Thank you for becoming a part of our
                online community at Main Street Technical Services (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;). As you browse our
                Website, please know that we respect your privacy and are committed to protecting it through this
                Privacy Policy (&ldquo;Policy&rdquo;).
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mt-3">
                This policy lays out how we may collect, store, use, and share any information that we gather from you
                when you access and use our Website (&ldquo;Website&rdquo;).
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mt-3">
                Please review this Privacy Policy very carefully. By accessing our website, you are agreeing to this
                and are expressing that you have been given reasonable access to review this Policy prior to your
                continued use of our Website. This Agreement is binding as of the date you access our Website.
              </p>
            </div>

            <Section title="Privacy Policy Purpose">
              <p>
                We want to be open and transparent in communicating how your data and information may be collected.
                This is the best way to ensure you are informed when browsing our Website or interacting with our
                Company on other related platforms. This summary will give you a clear understanding of where our
                privacy policy applies, where it does not apply, and how it is updated over time.
              </p>
              <p>Our policy governs any information we may gather:</p>
              <BulletList items={[
                'Through our Website.',
                'Through any chat, user submission, and electronic messaging features on the Website.',
                'Through email or newsletter opt-ins, text, or other marketing features you interact with on the Website.',
                'Through any downloadable products or features on this Website.',
                'Through your interaction with any of our advertisements, including those on third-party websites, applications, and services.',
              ]} />
              <p>
                Our policy does not govern any data or information we collect that is gathered offline. The Company
                has no control over data or information gathered by any third-party websites or partners we may link
                to, including affiliates. Should you not agree to any provision of our Company&apos;s policy you will no
                longer use, navigate, access or browse our Website. By continuing to use our Website, you are
                agreeing to the practices we lay out in this policy.
              </p>
            </Section>

            <Section title="Age Requirements">
              <p>
                We do not knowingly collect personal information from children under 16 years of age for any reason
                or in any circumstance. No one under the age of 16 may access, use, create an account, make any
                purchases, or provide any information through our Website without verified parental consent.
              </p>
              <p>
                In the event we are made aware that we unknowingly gathered personal information or data from an
                individual under the age of 16, we will promptly delete any related data. Should you have cause to
                believe we have gathered such data, please{' '}
                <a href="mailto:info@mainstreettech.us" className="text-brand-600 hover:underline">
                  email us
                </a>
                . Thank you in advance for helping us stay proactive in the data collection process.
              </p>
            </Section>

            <Section title="Collected Information">
              <p>
                As you browse and navigate our Website, some of your personal information will be automatically
                collected. We want you to understand what types of personal information we collect and how it is
                typically collected. Information we collect include the following categories and kinds of personal
                information:
              </p>
              <BulletList items={[
                'Contact information including full name, address, email address and phone numbers;',
                'Financial Information including credit and debit card and bank account information;',
                'Geolocation information;',
                'Demographic information including gender, age, employment information;',
                'Internet and website usage data;',
                'Other identifying information such as IP address, social media usernames, passwords and other information used for authentication and access;',
                'Your videos and photos;',
                'Your consumer profile data.',
              ]} />
              <p>
                This information and data is collected when you provide it to us or automatically as you browse our
                Website. Your information may also be collected from third parties such as our business partners.
              </p>
            </Section>

            <Section title="Sources of Information">
              <p>
                By engaging with our Website, you have an opportunity to provide us with personal information about
                you through forms, surveys, etc.
              </p>
              <p>
                Before you give us information, it is important to pay attention to what information is required and
                what is optional. By providing us with your information, you agree that it is correct, personal to
                you (and no one else whose permission has not been given), and complete.
              </p>
              <p>Your information may come from the following sources:</p>
              <BulletList items={[
                'Directly from you — for example, when you create an account, sign up for a newsletter, contact our Company, submit correspondence or inquiries to our Company through the Website or purchase a product.',
                'From third-parties — for example such as data vaults, data shares, and/or social media sites.',
                'Passive data collection processes that use such tools like cookies.',
              ]} />
              <p>
                Website users may also post or submit content (&ldquo;Submissions&rdquo;) on the Website including, but not
                limited to reviews, comments, testimonials, and discussions.
              </p>
              <p>
                We really appreciate when our customers and Website users give us an opportunity to use their posted
                submissions and information to promote our products/services, enhance our user&apos;s experience, and
                reach a new audience. However, please keep in mind that your submissions are transmitted to our
                Website and disseminated to others at your own risk. The Company has no control over how other
                third-parties and users interact with your submissions.
              </p>
            </Section>

            <Section title="Automated Collection Processes">
              <p>
                We use automated data collection technologies — including but not limited to browser cookies, flash
                cookies, bots and web beacons — to get a better understanding of your online activity and behavior
                over time and across third-party websites and applications. This data is used for research purposes,
                allowing us to uncover the browsing patterns, behavior habits, expedite search inquiries, and
                characteristics of our users.
              </p>
              <p>
                For more information on how you can opt-out of certain tracking and internet-based advertising
                procedures,{' '}
                <a
                  href="https://optout.networkadvertising.org/?c=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  click here
                </a>
                .
              </p>
              <p>We may use any of the following technologies for data collection:</p>
              <BulletList items={[
                'Our system automatically issues cookies when you visit our website. A cookie is a small data file that is put on the hard drive of your computer when you visit a website. If you would like to opt-out of tracking cookies you can set your browser to not accept the same. Also, we will ask if you would like to accept or refuse cookies through a pop-up message which you can select based on your preference when you visit our Website. However, if you opt out of or refuse cookies, certain features of our website may not function properly or be available to you.',
                'Our Website, electronic messaging, and emails may serve files known as web beacons or pixels that allow us, for example, to track users and devices that have accessed our Website or opened our emails. This automated tracking technology allows us to target and personalize marketing messages.',
              ]} />
            </Section>

            <Section title="Third-Party Service Providers">
              <p>
                We may use third-party service providers to help us operate our Website and deliver our services.
                These may include analytics platforms (such as Google Analytics), email marketing services,
                customer relationship management tools, and advertising networks. These providers may collect
                information about your use of our Website and other websites over time through cookies, web
                beacons, and similar technologies, and they have their own privacy policies governing how they
                use that data. We encourage you to review the privacy policies of any third-party services you
                interact with through our Website.
              </p>
            </Section>

            <Section title="Third-Party Tracking Processes">
              <p>
                By continuing to browse our Website, you agree to allow cookies and other tracking technologies from
                third parties unless your browser refuses them. These cookies may collect personal information or
                behavior information. This data is frequently used to provide you with targeted internet advertising.
                We have no control over the third-party privacy policies or their data collection, use, and sharing
                practices. For more information about how you can opt-out of receiving targeted advertising from many
                providers,{' '}
                <a
                  href="https://optout.networkadvertising.org/?c=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  click here
                </a>
                .
              </p>
            </Section>

            <Section title="Do Not Track">
              <p>
                Some browsers offer a &ldquo;Do Not Track&rdquo; (DNT) feature that signals to websites that you do not wish
                to have your online activity tracked. Our Website does not currently respond to DNT signals, as
                there is no industry-standard interpretation of how websites should respond to such signals. We
                will update this section if we adopt a uniform approach to honoring DNT signals in the future.
                In the meantime, you may use the opt-out options described in the <strong>Opting Out</strong> section of
                this policy to limit certain types of tracking.
              </p>
            </Section>

            <Section title="Data Use">
              <p>
                No matter if you provide us with your information directly or we automatically collect it, below is
                how we may use your data:
              </p>
              <BulletList items={[
                'In enhancing your user experience on our Website in a personalized, individualized way whenever possible.',
                'In shortening your website search inquiries and providing more relevant results.',
                'In completing any purpose for which you specifically give the information.',
                'In communication or contact with you directly.',
                'In advertising to you and our general audience.',
                "In any other manner set out in our Website's Terms of Use and Terms of Purchase (if applicable).",
                'In executing any necessary disclosure under the law or required legal process.',
                'In any additional way we specified at the time of information disclosure.',
              ]} />
            </Section>

            <Section title="Data Disclosure">
              <p>
                We only share your information pursuant to this policy and are dedicated to protecting your privacy.
                Please note that the Company may disclose non-personally identifiable and aggregate information
                concerning our users at any time without restriction. However, we can disclose personal data to any
                of the following:
              </p>
              <BulletList items={[
                'Our affiliates, brand partners, subsidiaries, or other selected partners.',
                'Our service providers, contracted companies or persons (i.e., credit card processing, shipping, analytics companies) as necessary for them to effectuate their services.',
                'Our parties to a corporate transaction involving the company such as a sale of the company or merger and/or acquisition.',
                'As directed by you or to meet the purpose for which you provided the data.',
              ]} />
              <p>Also, we can disclose your personal data in the following circumstances:</p>
              <BulletList items={[
                'When the law or legal process requires it.',
                'In enforcing our Terms of Use and Terms of Purchase (if applicable).',
                'When enforcing or protecting our rights or the rights of third parties.',
              ]} />
            </Section>

            <Section title="Opting Out">
              <p>
                We only want to communicate with you if you want to hear from us. The same goes for our use of your
                data — we will only use, disclose, or otherwise share your data with your permission.
              </p>
              <p>
                Please review the following options for opting out of our data collection, use and communication
                processes:
              </p>
              <BulletList items={[
                'You are generally able to disable or refuse to accept cookies on your browser.',
                'If you do not want us to share your data with third parties, you can unselect that box from any data sharing options when that process is presented to you.',
                'If you do not want to receive marketing and advertising emails including other forms of communication from the Company, you can unselect that box from any data sharing options when that process is presented to you. If you have received an email from us with an unsubscribe option, you may also follow the link and unsubscribe from the marketing material through that process.',
              ]} />
              <p>
                For more information from the Network Advertising Initiative on opting-out of targeted
                advertisements,{' '}
                <a
                  href="https://optout.networkadvertising.org/?c=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  click here
                </a>
                .
              </p>
            </Section>

            <Section title="Nevada Residents Privacy Rights">
              <p>
                For Nevada residents who desire to exercise their right to opt-out of the sale of their data, please
                send the request to{' '}
                <a href="mailto:info@mainstreettech.us" className="text-brand-600 hover:underline">
                  info@mainstreettech.us
                </a>
                , or by mail to Main Street Technical Services.
              </p>
            </Section>

            <Section title="California Resident Privacy Rights">
              <p>
                If you are a California resident the California Consumer Privacy Act (CCPA) affords consumers more
                control over how we may collect and use your data. For more information review the{' '}
                <a
                  href="https://oag.ca.gov/privacy/ccpa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  CCPA here
                </a>
                .
              </p>
              <p>California residents have the following rights:</p>
              <BulletList items={[
                'Right to know what personal information is collected, used, shared, or sold;',
                'Right to delete personal information (with certain exceptions);',
                'Right to correct inaccurate personal information;',
                'Right to data portability (to receive a copy of your personal information in a usable format);',
                'Right to opt-out of the sale or sharing of personal information;',
                'Right to limit the use of sensitive personal information; and,',
                'Right to non-discrimination for exercising any of these rights.',
              ]} />
              <p>
                If you are a California resident and have questions about or wish to exercise one of these rights,
                please send the request to{' '}
                <a href="mailto:info@mainstreettech.us" className="text-brand-600 hover:underline">
                  info@mainstreettech.us
                </a>
                .
              </p>
            </Section>

            <Section title="Additional State Privacy Rights">
              <p>
                Several other states have enacted comprehensive consumer privacy laws that may grant you
                additional rights depending on your state of residence. Residents of the following states may have
                rights similar to those described in the California section above, including the right to access,
                correct, delete, and obtain a portable copy of their personal data, as well as the right to opt
                out of targeted advertising, profiling, and the sale of personal data:
              </p>
              <BulletList items={[
                'Virginia — Consumer Data Protection Act (CDPA)',
                'Colorado — Colorado Privacy Act (CPA)',
                'Connecticut — Connecticut Data Privacy Act (CTDPA)',
                'Texas — Texas Data Privacy and Security Act (TDPSA)',
                'Other states as applicable under laws enacted after the date of this policy.',
              ]} />
              <p>
                To exercise any applicable state privacy rights, please contact us at{' '}
                <a href="mailto:info@mainstreettech.us" className="text-brand-600 hover:underline">
                  info@mainstreettech.us
                </a>
                . We will respond to verifiable requests within the timeframes required by applicable law.
                Certain rights may be subject to exceptions or limitations under the relevant state law.
              </p>
            </Section>

            <Section title="Data Security">
              <p>
                We take data security very seriously. However, with fast-evolving technologies, we cannot guarantee
                the complete safety and security of your data, but we do put safeguards in place and follow the
                latest data security strategies. Please bear in mind that your data security is also your
                responsibility. You are not allowed to share your password or account information with anyone,
                especially those you do not know. Any submission or transmission, whether direct or automated, of
                your personal data to us is done so at your own risk. The Company is not liable to you for any
                circumvention of our privacy protections or security systems on our Website.
              </p>
            </Section>

            <Section title="Data Retention">
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes for which it
                was collected, including to provide our services, comply with legal obligations, resolve disputes,
                and enforce our agreements. The specific retention period depends on the type of data and the
                purpose for which it was collected. When your personal information is no longer required for its
                original purpose or as required by law, we will securely delete, anonymize, or destroy it.
              </p>
              <p>
                You may request deletion of your personal information at any time (subject to any legal retention
                obligations) by contacting us at{' '}
                <a href="mailto:info@mainstreettech.us" className="text-brand-600 hover:underline">
                  info@mainstreettech.us
                </a>
                .
              </p>
            </Section>

            <Section title="Data Breach Notification">
              <p>
                In the event of a security breach that results in the unauthorized access, acquisition, or
                disclosure of your personal information, we will notify you as required by applicable law. Ohio
                and most other states require notification within a specified timeframe following discovery of a
                qualifying breach. Where required, we will notify affected individuals via email (if on file)
                or through a prominent notice on our Website, and will comply with all applicable data breach
                notification requirements, including any required notifications to state attorneys general or
                regulatory agencies.
              </p>
            </Section>

            <Section title="Correcting Your Information">
              <p>
                If your information has changed or you would simply like to review it, you may access and review
                your personal information by logging into our Website and visiting your client portal or submitting
                a change request to the Company by email at{' '}
                <a href="mailto:info@mainstreettech.us" className="text-brand-600 hover:underline">
                  info@mainstreettech.us
                </a>
                .
              </p>
              <p>
                Please note the Company has the right to refuse to update or delete your personal data if the
                Company believes such change would violate any law or legal process or if we have reason to believe
                the requested change is incorrect.
              </p>
            </Section>

            <Section title="Changes to this Policy">
              <p>
                Changes to our Company&apos;s Privacy Policy are necessary as circumstances and the law change over time.
                When we update our Privacy Policy we will clearly post the Last Updated Date at the top of this
                page. If any material changes are made and we have your valid email address on file, we will send
                you an email notifying you of the change.
              </p>
              <p>
                Your continued use of the Website means you are agreeing that your data and information will be
                governed by the most recent updated version of our policy.
              </p>
            </Section>

            {/* Contact Us */}
            <div className="mt-14 bg-brand-50 border border-brand-100 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Contact Us</h2>
              <p className="text-slate-600 mb-2">
                We know there was a lot of information to read through, so we are thankful for your time in
                reviewing our policies and practices. We hope it answered all of your questions regarding how we
                collect, use, and disclose your data and information.
              </p>
              <p className="text-slate-600 mb-5">If you have any questions, feedback, or comments, please contact us.</p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-brand-700 transition-colors text-sm"
              >
                Get in Touch
              </a>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">{title}</h2>
      <div className="space-y-4 text-slate-600 text-sm leading-relaxed">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 my-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
