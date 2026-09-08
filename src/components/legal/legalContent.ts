export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalPageContent = {
  title: string;
  effectiveDate: string;
  intro: string;
  sections: LegalSection[];
};

export const privacyPolicy: LegalPageContent = {
  title: "Privacy Policy",
  effectiveDate: "September 8th, 2026",
  intro:
    "Tojuco Solutions Inc. is committed to protecting personal information and being transparent about how it is collected, used, disclosed, and safeguarded. This Privacy Policy describes our practices when you visit our website, create an account, use our real-estate media management platform, access a white-label portal, or otherwise interact with our services.",
  sections: [
    {
      title: "1. Scope of This Policy",
      paragraphs: [
        "Tojuco provides technology that helps real-estate media companies and their authorized users manage services, appointments, vendors, property information, media, invoicing, and related business workflows.",
        "In some circumstances, Tojuco collects and uses personal information for its own business purposes, such as managing accounts, subscriptions, support, and website inquiries. In other circumstances, we process information on behalf of a business customer that controls its own branded portal and determines how information is collected and used.",
        "This Policy applies to information under Tojuco's control. Where a customer's privacy policy also applies, users should review that policy for information about the customer's own practices.",
      ],
    },
    {
      title: "2. Information We Collect",
      paragraphs: [
        "Depending on how you interact with the Services, we may collect account and contact information, business and professional information, property and order information, billing and transaction information, communications and support information, technical and usage information, and integration information.",
        "This may include names, business names, email addresses, telephone numbers, user roles, vendor profiles, appointment information, access instructions, property media, billing contacts, invoice details, payment status, support requests, IP addresses, browser and device information, log data, and information from integrations that you or your organization authorize.",
        "We may also receive information from business customers, authorized users, service providers, and other parties where collection is permitted by law.",
      ],
    },
    {
      title: "3. How We Use Personal Information",
      bullets: [
        "Creating, administering, and securing accounts and organizations.",
        "Providing scheduling, order management, media delivery, invoicing, and other platform functionality.",
        "Connecting authorized users, agents, vendors, and administrators to the information needed for their roles.",
        "Processing payments and maintaining financial and transaction records.",
        "Operating integrations requested or authorized by customers.",
        "Responding to inquiries, providing support, and communicating service-related information.",
        "Maintaining, troubleshooting, improving, and protecting the Services.",
        "Detecting fraud, unauthorized activity, and security incidents.",
        "Complying with legal, regulatory, accounting, and contractual obligations.",
        "Sending marketing communications where permitted by law and in accordance with your communication preferences.",
      ],
      paragraphs: [
        "We will not use personal information for unrelated purposes without obtaining any consent required by applicable law.",
      ],
    },
    {
      title: "4. Consent and Your Choices",
      paragraphs: [
        "We obtain consent where required and provide information about the purposes for which personal information is collected, used, and disclosed. The form of consent may vary depending on the sensitivity of the information and the circumstances.",
        "You may withdraw consent for certain activities, subject to legal or contractual restrictions and reasonable notice. Withdrawing consent may affect our ability to provide particular features or services.",
        "You can unsubscribe from marketing emails using the link provided in those messages or by contacting us. Operational communications, such as account security notices, invoices, and important service updates, may continue where necessary or permitted by law.",
      ],
    },
    {
      title: "5. How We Share Information",
      paragraphs: [
        "We may disclose personal information to your organization and authorized users according to roles, permissions, and account configuration.",
        "We may engage service providers for hosting, cloud storage, payment processing, email delivery, analytics, customer support, security, and other business operations, subject to appropriate contractual and security requirements.",
        "Information may be transferred to third-party platforms, including accounting, calendar, payment, or MLS-related systems, when an organization enables an integration or requests a connected service.",
        "We may disclose information where required or permitted by law, to protect rights and safety, investigate misuse, respond to lawful requests, or in connection with a business transaction subject to appropriate safeguards.",
        "We do not disclose personal information to third parties for their independent marketing purposes without the consent required by law.",
      ],
    },
    {
      title: "6. Property Media and Public Content",
      paragraphs: [
        "The Services may allow users to upload and publish property photographs, videos, floor plans, tours, and other listing materials. Some of these materials may contain personal information, including images of individuals, personal belongings, or details about a property.",
        "Business customers and users are responsible for ensuring they have the necessary rights, permissions, and lawful authority to collect, upload, use, and publish the materials they submit.",
        "Content designated for public publication, such as a property tour or marketing page, may be accessible to anyone with the relevant public link and may be viewed, shared, or indexed by third-party services depending on the publication settings.",
      ],
    },
    {
      title: "7. Cookies and Analytics",
      paragraphs: [
        "Our website and platform may use cookies and similar technologies to maintain sessions, remember preferences, support security, understand usage, and improve performance. Where enabled, analytics or marketing technologies may also collect information about interactions with our website.",
        "You may be able to manage cookies through your browser or the consent controls provided on our website. Disabling certain cookies may affect the functionality of the Services. Where required by law, we will obtain consent before using non-essential tracking technologies.",
      ],
    },
    {
      title: "8. Data Storage and International Transfers",
      paragraphs: [
        "Personal information may be stored or processed in Canada or in other jurisdictions where Tojuco or its service providers operate. When information is processed outside Canada, it may be subject to the laws of that jurisdiction, including lawful access by public authorities.",
        "We use contractual, organizational, and technical measures appropriate to the nature of the information and the risks associated with its processing.",
      ],
    },
    {
      title: "9. Security",
      paragraphs: [
        "We implement reasonable administrative, technical, and physical safeguards designed to protect personal information against unauthorized access, loss, misuse, disclosure, and alteration. These measures may include access controls, authentication, secure transmission, monitoring, backups, and restrictions on personnel access, as appropriate.",
        "No electronic system can be guaranteed to be completely secure. Users are responsible for maintaining the confidentiality of their account credentials and notifying us promptly if they suspect unauthorized access.",
      ],
    },
    {
      title: "10. Retention and Deletion",
      paragraphs: [
        "We retain personal information only for as long as reasonably necessary to fulfill the purposes for which it was collected, meet legal or contractual requirements, resolve disputes, and maintain appropriate business records.",
        "Retention periods may vary depending on the type of information, the account relationship, and applicable legal requirements. Information processed on behalf of a business customer may be retained or deleted in accordance with that customer's agreement with Tojuco and applicable law.",
        "When information is no longer required, we take reasonable steps to securely delete, destroy, or anonymize it, subject to lawful retention requirements and applicable backup processes.",
      ],
    },
    {
      title: "11. Access, Correction, and Privacy Requests",
      paragraphs: [
        "Subject to applicable law, you may request access to personal information we hold about you, ask that inaccurate information be corrected, or inquire about how your information is used and disclosed. You may also request deletion or withdrawal of consent where available under applicable law.",
        "If your information is held within an account operated by a Tojuco business customer, we may direct your request to that organization or assist it in responding, as appropriate.",
        "To submit a privacy request or complaint, contact our Privacy Officer. We may need to verify your identity before responding. If you are dissatisfied with our response, you may have the right to contact the applicable privacy regulator.",
      ],
    },
    {
      title: "12. Children's Privacy",
      paragraphs: [
        "The Services are intended for business use and are not directed at children. We do not knowingly permit children to create independent accounts without appropriate authorization. If we become aware that personal information has been collected from a child without the consent or authority required by law, we will take appropriate steps to address the situation.",
      ],
    },
    {
      title: "13. Third-Party Services",
      paragraphs: [
        "The Services may contain links to third-party websites or connect with external platforms. Those services operate under their own privacy policies and terms. Tojuco is not responsible for the privacy practices of third parties that operate independently of us.",
      ],
    },
    {
      title: "14. Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy to reflect changes in our Services, information practices, or legal requirements. The updated Policy will be posted with a revised effective date. Where required by law, we will provide additional notice or obtain consent for material changes.",
      ],
    },
  ],
};

export const termsAndConditions: LegalPageContent = {
  title: "Terms and Conditions",
  effectiveDate: "September 8th, 2026",
  intro:
    "These Terms and Conditions govern access to and use of the Tojuco website, software platform, applications, and related services provided by Tojuco Solutions Inc. By creating an account, accepting these Terms, or using the Services, you agree to be bound by them.",
  sections: [
    {
      title: "1. The Services",
      paragraphs: [
        "Tojuco provides a technology platform designed to support real-estate media companies and their business operations. Features may include company and user management, scheduling, order and service management, vendor coordination, property-media storage and delivery, public tours, feature sheets, invoicing, payments, and third-party integrations.",
        "The availability of particular features depends on your subscription, account configuration, and any applicable order form or separate agreement.",
        "Tojuco is a software provider. Unless expressly agreed otherwise in writing, Tojuco does not itself provide real-estate photography, property measurements, floor-plan production, staging, or other services offered by companies using the platform.",
      ],
    },
    {
      title: "2. Accounts and Authorized Users",
      paragraphs: [
        "You must provide accurate information when creating an account and keep it reasonably up to date. You are responsible for maintaining the confidentiality of your login credentials and for activity conducted through your account, except to the extent caused by Tojuco's own acts or omissions.",
        "Organizations are responsible for managing their authorized users, assigning appropriate permissions, and removing access when it is no longer required. Users must not share accounts in a manner that compromises security or circumvents applicable subscription restrictions.",
        "You must notify Tojuco promptly if you become aware of unauthorized access or a security incident affecting your account.",
      ],
    },
    {
      title: "3. Business Customers and White-Label Portals",
      paragraphs: [
        "Business customers may configure branded portals, invite users, manage services, establish pricing, assign vendors, and make content available through the platform.",
        "Each business customer is responsible for its own commercial relationships with agents, vendors, and other customers, including its service descriptions, pricing, cancellations, refunds, professional obligations, and applicable consumer protection requirements.",
        "Where you access Tojuco through a white-label portal operated by another business, that business may establish additional terms governing the services it provides to you. Those terms are separate from these Terms unless expressly incorporated into an agreement with Tojuco.",
        "Business customers are responsible for ensuring that their users receive appropriate privacy notices and that they have the authority required to provide personal information and content to the platform.",
      ],
    },
    {
      title: "4. Subscriptions, Fees, and Payment",
      paragraphs: [
        "Fees for Tojuco subscriptions, usage-based services, optional features, or other charges will be set out in the applicable pricing page, order form, subscription agreement, or checkout process.",
        "Unless otherwise stated in the applicable agreement, fees are payable in the currency and at the frequency disclosed at the time of purchase, applicable taxes are additional unless expressly stated otherwise, customers are responsible for maintaining valid payment information and paying amounts properly due, and usage limits or optional service fees are governed by the applicable commercial terms.",
        "If a subscription renews automatically, the renewal frequency, charges, cancellation method, and any notice requirements will be disclosed in the applicable agreement or checkout process.",
        "Tojuco may suspend access for materially overdue amounts after providing notice and a reasonable opportunity to resolve the issue, subject to applicable law and the relevant agreement.",
        "The specific pricing, renewal, cancellation, and refund terms presented to a customer at purchase will control if they conflict with this general section.",
      ],
    },
    {
      title: "5. Cancellation and Termination",
      paragraphs: [
        "You may cancel a subscription in accordance with the cancellation process and notice requirements stated in your applicable subscription agreement or account settings.",
        "Cancellation does not automatically entitle a customer to a refund of fees already paid, except where required by law or expressly provided in the applicable agreement. Any unpaid amounts properly incurred before cancellation remain payable.",
        "Tojuco may suspend or terminate access if a user materially violates these Terms, engages in unlawful activity, creates a material security risk, or fails to pay amounts properly due, subject to applicable notice requirements.",
        "Upon termination, access to the Services may end. Customer data will be handled in accordance with the applicable agreement, our Privacy Policy, and legal retention requirements.",
      ],
    },
    {
      title: "6. Customer Content and Ownership",
      paragraphs: [
        "Customer Content includes photographs, videos, floor plans, property details, measurements, logos, documents, messages, and other materials uploaded, created, or submitted by users through the Services.",
        "As between Tojuco and the customer, the customer retains its ownership rights in Customer Content, subject to any rights belonging to third parties. Tojuco does not claim ownership of Customer Content merely because it is uploaded to the platform.",
        "You grant Tojuco a non-exclusive, worldwide, royalty-free licence to host, store, reproduce, process, display, transmit, and otherwise use Customer Content only as reasonably necessary to provide, maintain, secure, and improve the Services, fulfill your instructions, and comply with applicable law.",
        "You represent that you have the rights and permissions necessary to submit Customer Content and authorize its use through the Services.",
      ],
    },
    {
      title: "7. Property Information, Measurements, and Media",
      paragraphs: [
        "Business customers and their users are responsible for the accuracy and completeness of property information, measurements, descriptions, and media they submit or approve.",
        "Tojuco may provide tools for calculating, formatting, displaying, or publishing measurements and property information. These tools support business workflows but do not replace professional judgment, verification, or any measurement standards applicable to a particular transaction or jurisdiction.",
        "Unless expressly agreed otherwise, Tojuco does not warrant the accuracy of user-supplied measurements, floor plans, listing details, or other property representations.",
      ],
    },
    {
      title: "8. Public Tours and Sharing",
      paragraphs: [
        "The Services may allow users to publish property tours, media galleries, feature sheets, and other public-facing content. The organization responsible for the content determines what is published and is responsible for obtaining the necessary permissions.",
        "Public content may be accessible through shared links and may be copied, shared, or indexed by third parties depending on the publication settings. Tojuco cannot guarantee that publicly distributed content can be removed from all third-party systems after publication.",
        "You must not publish content that violates applicable law, infringes another person's rights, or discloses sensitive personal information without appropriate authority.",
      ],
    },
    {
      title: "9. Third-Party Integrations",
      paragraphs: [
        "Tojuco may support integrations with payment processors, accounting software, calendar services, MLS systems, and other third-party platforms.",
        "You are responsible for maintaining any required third-party accounts, permissions, licences, and agreements. Third-party services are governed by their own terms and policies, and their availability or functionality may change independently of Tojuco.",
        "Tojuco does not guarantee that third-party integrations will operate continuously or that a third party will accept, publish, or process information submitted through an integration.",
      ],
    },
    {
      title: "10. Acceptable Use",
      bullets: [
        "Engage in unlawful, fraudulent, or deceptive activity.",
        "Upload malicious software or interfere with platform security.",
        "Access information or accounts without authorization.",
        "Infringe intellectual property, privacy, or other legal rights.",
        "Submit content that is unlawful, defamatory, or otherwise prohibited by applicable law.",
        "Attempt to reverse engineer, copy, resell, or exploit the software except as permitted by law or a written agreement.",
        "Circumvent usage limits, access controls, or security measures.",
        "Use automated tools in a manner that materially disrupts the Services.",
        "Interfere with another customer's access or use of the platform.",
      ],
      paragraphs: [
        "We may take reasonable action to investigate and address violations, including restricting access or removing unlawful content where appropriate.",
      ],
    },
    {
      title: "11. Intellectual Property",
      paragraphs: [
        "Tojuco and its licensors retain all rights, title, and interest in the platform, software, website, designs, trademarks, documentation, and related intellectual property, excluding Customer Content.",
        "Subject to these Terms and payment of applicable fees, Tojuco grants you a limited, non-exclusive, non-transferable right to access and use the Services for your authorized business purposes during the applicable subscription term.",
        "No ownership rights in the software are transferred to you. You may not use Tojuco's name, trademarks, or branding without permission, except as expressly permitted through the Services or a written agreement.",
      ],
    },
    {
      title: "12. Privacy and Confidentiality",
      paragraphs: [
        "Our collection, use, and disclosure of personal information are described in our Privacy Policy. Business customers remain responsible for their own privacy obligations relating to information they collect and process through the platform.",
        "Each party agrees to protect the other party's confidential business information using reasonable care and to use it only for purposes connected with the Services, except where disclosure is authorized or required by law.",
      ],
    },
    {
      title: "13. Availability and Changes to the Services",
      paragraphs: [
        "We aim to provide reliable Services and may perform maintenance, updates, and improvements from time to time. Temporary interruptions may occur due to maintenance, technical issues, third-party services, or events outside our reasonable control.",
        "Tojuco may modify features or functionality, provided that material changes affecting paid subscriptions are handled in accordance with the applicable agreement and applicable law. Any service-level commitments, support response times, or specific availability guarantees must be expressly stated in a separate agreement.",
      ],
    },
    {
      title: "14. Disclaimer of Warranties",
      paragraphs: [
        "To the maximum extent permitted by applicable law, and except for warranties expressly provided in a written agreement, the Services are provided on an as is and as available basis.",
        "Tojuco does not guarantee that the Services will be uninterrupted, error-free, or suitable for every particular business purpose. We do not warrant the accuracy of third-party information, customer-submitted content, or the services performed by independent businesses or vendors using the platform.",
        "Nothing in these Terms excludes warranties or rights that cannot lawfully be excluded.",
      ],
    },
    {
      title: "15. Limitation of Liability",
      paragraphs: [
        "To the maximum extent permitted by applicable law, Tojuco will not be liable for indirect, incidental, special, consequential, or punitive damages, including lost profits, lost business opportunities, or loss of goodwill, arising from the use of the Services.",
        "To the maximum extent permitted by law, Tojuco's aggregate liability arising out of or relating to the Services will not exceed the fees paid or payable by the customer to Tojuco during the twelve months immediately preceding the event giving rise to the claim.",
        "These limitations do not apply to liability that cannot lawfully be limited or excluded, and do not override any different liability provisions expressly agreed to in a signed agreement.",
      ],
    },
    {
      title: "16. Indemnification",
      paragraphs: [
        "To the extent permitted by law, you agree to indemnify and hold Tojuco harmless from third-party claims, damages, and reasonable expenses arising from your unlawful use of the Services, your infringement of third-party rights, or Customer Content you submit without the necessary rights or authority.",
        "This obligation does not apply to the extent a claim is caused by Tojuco's own breach, negligence, or unlawful conduct.",
      ],
    },
    {
      title: "17. Governing Law and Disputes",
      paragraphs: [
        "These Terms are governed by the laws of the Province of British Columbia and the applicable federal laws of Canada, without regard to conflict-of-law principles.",
        "Subject to any mandatory rights or jurisdictional requirements under applicable law, the courts of British Columbia will have jurisdiction over disputes arising from these Terms. Before commencing formal proceedings, the parties agree to make reasonable efforts to resolve disputes through good-faith discussions.",
      ],
    },
    {
      title: "18. Changes to These Terms",
      paragraphs: [
        "We may update these Terms to reflect changes in the Services, business practices, or applicable law. Material changes will be communicated through the website, platform, or other appropriate means.",
        "Where required by law or an applicable agreement, we will obtain consent or provide the required notice before changes take effect. Continued use after the effective date of updated Terms constitutes acceptance to the extent permitted by law.",
      ],
    },
    {
      title: "19. General Provisions",
      paragraphs: [
        "If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in effect. Failure to enforce a provision does not constitute a waiver of the right to enforce it later.",
        "You may not assign your rights or obligations under these Terms without Tojuco's prior written consent, except as permitted by an applicable agreement. Tojuco may assign these Terms in connection with a merger, reorganization, or sale of substantially all relevant assets, subject to applicable law.",
        "These Terms, together with the Privacy Policy and any applicable order form, subscription agreement, or other written agreement, constitute the agreement governing your use of the Services. In the event of a conflict, the applicable signed agreement will prevail to the extent of the conflict.",
      ],
    },
  ],
};
