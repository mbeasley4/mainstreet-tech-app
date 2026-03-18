import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Main Street Tech',
  description:
    'Terms of Use for Main Street Technical Services. Learn the terms governing your access and use of our Website.',
  openGraph: {
    title: 'Terms & Conditions | Main Street Tech',
    description:
      'Terms of Use for Main Street Technical Services. Learn the terms governing your access and use of our Website.',
    url: 'https://www.mainstreettech.com/terms-and-conditions',
    images: [{ url: '/images/default-og.png' }],
  },
  twitter: {
    title: 'Terms & Conditions | Main Street Tech',
    description:
      'Terms of Use for Main Street Technical Services. Learn the terms governing your access and use of our Website.',
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* ── Page Header ─────────────────────────────── */}
        <div className="hero-gradient text-white pt-32 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-brand-200 text-sm font-semibold uppercase tracking-widest mb-2">Legal</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Terms &amp; Conditions</h1>
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
                Thank you for visiting our Company&apos;s website (&ldquo;Website&rdquo;). We hope you find what you are looking
                for and enjoy our website content, which has been thoughtfully crafted for users like you.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mt-3">
                Please review these Terms of Use very carefully. By accessing our Website, you are agreeing to these
                and are expressing that you have been given reasonable access to review these Terms prior to your
                continued use of our Website. This Agreement is binding as of the date you access our Website.
              </p>
            </div>

            <Section title="General Purpose">
              <p>
                These Terms of Use (&ldquo;Terms,&rdquo; or &ldquo;Agreement&rdquo;) that You, the Website user, are entering with Main
                Street Technical Services (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) govern how you may access and use our
                Website. The Company and You will collectively be referred to as &ldquo;Parties,&rdquo; and each individually
                as a &ldquo;Party.&rdquo;
              </p>
              <p>
                By accessing our Website, you are agreeing to these Terms and our{' '}
                <a href="/privacy-policy" className="text-brand-600 hover:underline">
                  Privacy Policy
                </a>
                , which is hereby incorporated by reference. If you do not wish to agree to these Terms and our
                Privacy Policy or are not legally able to form a binding contract, you must immediately quit using
                our Website.
              </p>
            </Section>

            <Section title="Age Limitations">
              <p>
                Our Website is offered to users who are at least 16 years old. If you are not at least 16 years
                old, you are not allowed to use our Website. By continuing to use our Website, you are representing
                that you meet the minimum age requirements to form a binding contract in your jurisdiction.
              </p>
            </Section>

            <Section title="Changing Terms">
              <p>
                We reserve the right to update and revise these Terms at any time without notice to you. The date
                that these Terms were last updated is noted on the top of this Agreement. Your continued use of the
                Website after we have updated these Terms indicates your acceptance and agreement to the changes.
              </p>
            </Section>

            <Section title="Website Changes + Access">
              <p>
                As our Company evolves, our Website and its contents will change with it. We reserve the right to
                delete, withdraw, or edit this Website (and any service or material we provide on the Website)
                however we see fit, at any time, and without notice. We are not liable to you if the Website or any
                part of it is unavailable.
              </p>
              <p>
                If you are prompted to provide registration information or other details to access the website or
                any part of it, you are warranting that the information you provide is correct. Further, you agree
                that any information you provide to us is correct.
              </p>
            </Section>

            <Section title="Privacy">
              <p>
                We respect your privacy and are committed to protecting it. We may use certain information that we
                collect from you to operate our Company and/or our Website. Please review our{' '}
                <a href="/privacy-policy" className="text-brand-600 hover:underline">
                  Privacy Policy
                </a>{' '}
                to understand the types of data we collect from you and your devices (&ldquo;Data&rdquo;) in connection with
                your use of our Website and how we use your Data. By continuing to use our Website you are
                expressing that you agree with how we collect and use your Data as set out in these Terms and our
                Privacy Policy.
              </p>
            </Section>

            <Section title="Protection of Personal Information">
              <p>
                If you choose, or are provided with, a username, password, or any other piece of information as
                part of our security procedures, you must treat such information as confidential, and you must not
                disclose it to any other person or entity.
              </p>
              <p>
                You also acknowledge that your account is personal to you and agree not to provide any other person
                with access to this Website or portions of it using your username, password, or other security
                information. We recommend keeping your login credentials and account information private so no other
                users are able to access it.
              </p>
              <p>
                You agree to notify us immediately of any unauthorized access to or use of your username or
                password or any other breach of security. You also agree to ensure that you exit from your account
                at the end of each session.
              </p>
              <p>
                You should use particular caution when accessing your account from a public or shared computer so
                that others are not able to view or record your password or other personal information. If you
                decide to log into your account on a public or shared computer, make sure to log out after your
                viewing session to help protect your information.
              </p>
              <p>
                We have the right to disable any username, password, or other identifier, whether chosen by you or
                provided by us, at any time in our sole discretion for any or no reason, including if, in our
                opinion, you have violated any provision of these Terms of Use.
              </p>
            </Section>

            <Section title="Intellectual Property">
              <p>
                We enjoy sharing and creating valuable content on our Website for all our users to engage with and
                enjoy. However, in making this content publicly available, we still hold ALL of the Intellectual
                Property Rights to the work. Meaning, all intellectual property rights including, but not limited
                to trademarks, copyrighted material, trade secrets, and other proprietary information are owned by
                the Company and its designees. The Company has the sole exclusive right to reproduce, share and
                create derivative works from this intellectual property. You understand and agree that you are only
                allowed to access the Website and our content for your personal, non-commercial use.
              </p>
              <p>
                We understand and agree that your computer may incidentally and automatically store copies of our
                content and website for ease of accessing those materials. However, you are not allowed to
                reproduce, modify, or share the material contained on or downloaded from our Website.
              </p>
              <p>
                You may not use the Company&apos;s trademarks including, but not limited to, brand names, logo marks,
                service marks, designs, and slogans, without written permission from the Company.
              </p>
            </Section>

            <Section title="Copyright Infringement (DMCA)">
              <p>
                We respect the intellectual property rights of others and expect users of our Website to do the
                same. If you believe that any content on our Website infringes a copyright you own or control,
                please send a written notice to our designated agent that includes all of the following:
              </p>
              <BulletList items={[
                'A description of the copyrighted work you claim has been infringed.',
                'A description of where the allegedly infringing material is located on our Website (e.g., URL).',
                'Your name, address, telephone number, and email address.',
                'A statement that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.',
                'A statement made under penalty of perjury that the information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner\'s behalf.',
                'Your electronic or physical signature.',
              ]} />
              <p>
                Notices of claimed copyright infringement should be directed to: Main Street Technical Services,
                6355 E. Kemper Road, Suite 240, Cincinnati, Ohio 45241, or by email at{' '}
                <a href="mailto:info@mainstreettech.us" className="text-brand-600 hover:underline">
                  info@mainstreettech.us
                </a>
                . We will respond to valid notices in accordance with the Digital Millennium Copyright Act (17
                U.S.C. § 512).
              </p>
            </Section>

            <Section title="Linking to Website + Social Media">
              <p>
                Thank you for your interest in linking to our Website and/or social media accounts. Before you
                place a link on your website or another platform, please adhere to these guidelines to ensure our
                reputation is left intact. If you are linking to our Website as a credited source for an article,
                blog or press, you must include a link to our Website in the cited material. However, no
                information or content from our Website should be copied in its entirety without express written
                permission from the Company. All links to our Website must establish that you do not have any
                association or endorsement from the Company (absent a separate affiliate, influencer, or other
                written agreement). Further, you should only link to our Website on a site or social media account
                that is owned by you and complies with the content guidelines in this Agreement. You agree to
                immediately remove any and all links at the Company&apos;s request.
              </p>
            </Section>

            <Section title="Restricted Uses">
              <p>
                To aid in keeping our Website more safe and secure for all its users, we have curated a list of
                prohibited uses of our Website. Our Website should only be accessed and used for lawful purposes
                according to these Terms.
              </p>
              <p>You are not allowed to use the Website:</p>
              <BulletList items={[
                'In violation of any State, Federal or International Laws.',
                'For any discriminatory purpose.',
                'For any purpose in violation of our User Content provision in the Terms, incorporated by reference herein.',
                'For any spoofing, spamming, or impersonating the Company purposes.',
                'To transmit or distribute spam email or messaging.',
              ]} />
              <p>Further, you may not:</p>
              <BulletList items={[
                'Implement or use any spider, crawler, scraping, bots, or other automated processes to access the Website for any purpose.',
                "Interfere with the Website's operation in any way including, but not limited to, the use of viruses, malicious codes, attacks or programs.",
                'Bypass or hack authentication processes or gain any unauthorized access to the Website.',
              ]} />
            </Section>

            <Section title="User Submissions">
              <p>
                From time to time, our Website may contain features which enable you to submit or post content and
                material to the Website and/or submit directly to the Company. All user submissions are
                non-confidential. You relinquish to the Company all proprietary rights in the same upon submission.
                You understand and agree that anything you submit or post through our Website grants the Company
                and our designees the right to use such material in any capacity for any purpose.
              </p>
              <p>
                You understand and agree that you are solely responsible and liable for any submissions you make.
                The Company will not be held liable in any way for your submissions or posts.
              </p>
            </Section>

            <Section title="Consent to Use">
              <p>
                By submitting reviews, images, comments, testimonials, or tags to us on any platform including,
                but not limited to social media and online reviews, you are by default granting us a commercial
                license and voluntarily releasing us to use your submissions for any reasonable future business
                use. In doing so, we may use your name and/or photo along with any other publicly acknowledged
                information that has been revealed by you when referring to your submissions on our Website,
                marketing materials, guides, and any other platform not expressed in this agreement.
              </p>
            </Section>

            <Section title="Monitoring + Enforcement">
              <p>
                We value all user submissions, but we are unable to review all submissions, posts and materials
                before they are posted to the Website. Therefore, we cannot be held liable for the failure to
                remove objectionable submissions or posts from the Website. However, the Company may remove user
                submissions and content for any reason and at its sole discretion without notice to you. Further,
                the Company may terminate user access to the website for any reason without notice.
              </p>
              <p>
                Additionally, you understand and agree that the Company may be required to disclose your identity
                or personally identifiable information due to third-party claims, legal matters or for other
                purposes in compliance with law enforcement agencies, court orders or appropriate directives. You
                agree that the Company will not be liable to you in any way for the disclosure of your identity or
                other information under the foregoing circumstances. The Company reserves the right to take legal
                action against any user, person or entity who violates this Agreement.
              </p>
            </Section>

            <Section title="Termination">
              <p>
                The Company may suspend or terminate your access to the Website at any time, with or without
                notice, for any reason, including but not limited to a violation of these Terms. Upon termination,
                your right to access and use the Website ceases immediately.
              </p>
              <p>
                All provisions of these Terms that by their nature should survive termination will survive,
                including without limitation: Intellectual Property, Copyright Infringement (DMCA), Website
                Disclaimer, No Warranties, Limitation of Liability, Indemnification, Binding Arbitration, and
                Choice of Law.
              </p>
            </Section>

            <Section title="User Content Guidelines">
              <p>
                We care about providing a safe, inclusive space through our Website for users to gather online,
                share ideas, and consume helpful content. User submissions are not allowed to:
              </p>
              <BulletList items={[
                'Violate any state, federal, or local laws and regulations or promote illegal activities.',
                "Violate any other person or entity's intellectual property or legal rights.",
                'Contain or encourage any obscene, indecent, sexually explicit or violent material and/or acts.',
                'Contain any hateful, discriminatory or other objectionable content.',
                'Embarrass, stalk, harass, or harm another person.',
                "Misrepresent any person's identity or organizational affiliation.",
                'Be used for any promotional or commercial purposes including advertising.',
              ]} />
              <p>
                The Company&apos;s guidelines for user submissions and interactions are intended to promote our
                community and Website&apos;s safety. However, the Company is not liable for any content that is not in
                compliance with these Terms and guidelines.
              </p>
              <p>
                If you see content that does not follow these Terms, please inform us immediately so we can look
                into this issue and determine how to move forward. Together, we can keep our Website free of
                language and materials that are intended to hurt, harm, or infringe on the rights of others.
              </p>
            </Section>

            <Section title="Website Disclaimer">
              <p>
                We do not warrant the accuracy, completeness, or usefulness of the information you find on our
                Website. Any reliance you place on such information is at your own risk.
              </p>
              <p>
                You understand and agree that the Website and its content is merely informational in nature and
                does not represent any level of legal, medical, financial, or other professional industry-specific
                advice. As such, our Company will not be responsible for any damages that result from the use of
                our Website and its content.
              </p>
            </Section>

            <Section title="External + Affiliate Links">
              <p>
                From time to time, we will link to external websites and sources that are outside of our Company
                for your convenience only. These links may include, but are not limited to advertisements,
                affiliate links, 3rd party website links, and sponsored links. In doing so, we recognize that we
                have no control over the contents of these sites, nor do we have any access to making changes or
                amendments to them.
              </p>
            </Section>

            <Section title="Geographic Limitations">
              <p>
                The owner of the Website is based in the State of Ohio in the United States. We provide this
                Website for use only by persons located in the United States.
              </p>
            </Section>

            <Section title="No Warranties + No Guarantees">
              <p>
                The Company is providing this Website and all content accessible through it on an &ldquo;As-Is&rdquo; basis
                for individual use by you at your own risk and without any warranties, whether express or implied,
                including, but not limited to warranties of title; merchantability; fitness for a particular use;
                or any rights or licenses in this Agreement. We cannot guarantee that the Website and any
                downloadable content will be free from viruses or other harmful code. The Company makes no
                warranty as to the accuracy and reliability of information set forth on the Website and its
                content. To the fullest permissible extent, the Company disclaims liability for any damages you
                sustain as a result of use or access of the Company&apos;s Website, content and any linked 3rd party
                Websites or content.
              </p>
              <p>
                You understand and agree that the Company does not guarantee specific results, including financial
                or other business gains for you personally or for your business. The information included on the
                Website is provided for informational purposes only and you are responsible for implementing any
                business practices or suggested actions found on the Website.
              </p>
            </Section>

            <Section title="Force Majeure">
              <p>
                The Company will not be liable for any failure or delay in performance of its obligations under
                this Agreement resulting from causes beyond the Company&apos;s reasonable control, including but not
                limited to acts of God, natural disasters, pandemic or epidemic, government regulations or
                restrictions, war, terrorism, civil unrest, labor disputes, power outages, internet or
                telecommunications failures, or any other event or circumstance outside the Company&apos;s reasonable
                control. Performance obligations will be suspended for the duration of any such event, and the
                Company will make reasonable efforts to resume normal operations as promptly as possible.
              </p>
            </Section>

            <Section title="Limitation of Liability">
              <p>
                The Company is in no way liable to You or any other third party for any and all damages including,
                but not limited to, punitive or exemplary damages or those resulting from negligence relating to
                this Agreement or Your use of this Website, regardless of whether the Purchaser was advised of
                such damages, the foreseeable nature of the damages, and the legal or equitable theory upon which
                the claim for damages is based. If found to be applicable by a court of competent jurisdiction or
                by law, the Company&apos;s total liability arising out of or related to this Agreement and your use of
                the Website will be limited to the total amount paid to the Company preceding the event giving
                rise to the claim.
              </p>
              <p>
                This Limitation of Liability provision does not purport to affect any liability that cannot be
                excluded or limited under the law.
              </p>
            </Section>

            <Section title="Indemnification">
              <p>
                You agree to defend, indemnify, and hold harmless the Company and its designees in all cases
                arising out of your use of our Website, web content, services or any information contained
                therein.
              </p>
            </Section>

            <Section title="Binding Arbitration">
              <p>
                In the event there is a dispute between the Parties that cannot be brought to an amicable mutual
                understanding, the Parties understand and agree that such dispute will be handled through binding
                arbitration in alignment with the rules of the American Arbitration Association. The Parties
                understand that they will be bound by any decision rendered by the arbitrator and/or arbitration
                proceedings. The arbitration itself will be held in the State of Ohio. If the arbitration is
                unable to move forward in the designated jurisdiction, the Company will unilaterally elect another
                venue for the arbitration. The Parties will equally share in the costs and expenses of arbitration
                and any related proceedings.
              </p>
              <p>
                <strong>Class Action Waiver.</strong> You and the Company agree that any dispute resolution
                proceedings will be conducted only on an individual basis and not as part of a class, consolidated,
                or representative action. You expressly waive any right to bring or participate in a class action
                lawsuit or class-wide arbitration against the Company. If this waiver is found unenforceable,
                then the entirety of this Binding Arbitration section will be null and void.
              </p>
            </Section>

            <Section title="Choice of Law">
              <p>
                This Agreement and the Parties&apos; relationship are governed by the laws of the State of Ohio.
              </p>
            </Section>

            <Section title="Severability + No Waiver">
              <p>
                If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court with
                jurisdiction, all other provisions set forth in this Agreement will remain valid and enforceable.
                By failing to enforce any right or provision of this Agreement, we are not waiving the right or
                ability to enforce the same rights or provisions in the future. Any right or provision in this
                Agreement will only be considered waived if done so in writing by an authorized representative of
                the Company.
              </p>
            </Section>

            <Section title="Transfer + Assignment">
              <p>
                You may not transfer or assign any of your rights under this Agreement to any third party without
                the express written consent of the Company.
              </p>
            </Section>

            <Section title="Notices">
              <p>
                We may provide notice to you by: (i) sending a message to the email address provided by you, or
                (ii) by posting to the Website. Notices sent by email will be effective at the time of sending
                and notices posted to the Website will be effective upon posting. You may provide notice to the
                Company by certified mail to Main Street Technical Services, 6355 E. Kemper Road, Suite 240,
                Cincinnati, Ohio 45241. Notices provided by certified mail will be effective upon actual receipt
                of the notice.
              </p>
              <p>
                All legal notices including those related to intellectual property and copyright infringement
                claims should be sent by certified mail to the Company&apos;s agent and mailing address located in
                this provision above.
              </p>
              <p>
                All requests and other communications relating to the Website should be directed to{' '}
                <a href="mailto:info@mainstreettech.us" className="text-brand-600 hover:underline">
                  info@mainstreettech.us
                </a>
                .
              </p>
            </Section>

            <Section title="Electronic Communications">
              <p>
                By using our Website and providing your contact information, you consent to receive electronic
                communications from us, including emails, notices, disclosures, and updates related to your use
                of our Website and any services we provide. You agree that any agreements, notices, disclosures,
                and other communications we provide to you electronically satisfy any legal requirement that such
                communications be in writing, in accordance with the Electronic Signatures in Global and National
                Commerce Act (E-SIGN Act) and applicable state law. This consent does not affect any rights you
                may have to withdraw consent to electronic communications under applicable law.
              </p>
            </Section>

            <Section title="Headings for Convenience Only">
              <p>
                The headings in these Terms are included for convenience and reference, and are not meant to
                describe, define, or limit the scope or intent of any provision.
              </p>
            </Section>

            {/* Entire Agreement */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-10">
              <h2 className="text-lg font-bold text-slate-900 mb-3">Entire Agreement + All Rights Reserved</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                In concluding this Agreement, you understand and acknowledge that these Terms constitute the final
                agreement and supersedes all others regarding the purchase, sale, and use of any Products and the
                use of the Website. The Company reserves any and all rights not expressly granted in these Terms.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mt-3">
                Thank you for reading the Terms of Use in its entirety. We hope you were able to gain clarity on
                how to effectively use and browse our Website.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="mt-4 bg-brand-50 border border-brand-100 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Questions?</h2>
              <p className="text-slate-600 mb-5">
                If you have any questions, feedback, or comments about these Terms, please contact us.
              </p>
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
