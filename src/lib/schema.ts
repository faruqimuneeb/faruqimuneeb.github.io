import { profile, experience } from "@/data/profile";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    givenName: "Muneeb",
    familyName: "Faruqi",
    email: profile.email,
    telephone: profile.phone,
    jobTitle: profile.title.split("|")[0].trim(),
    description: profile.bio,
    knowsAbout: [
      "PHP",
      "Laravel",
      "CodeIgniter",
      "JavaScript",
      "jQuery",
      "MySQL",
      "REST API",
      "VICIdial",
      "Asterisk PBX",
      "OAuth2",
      "JWT",
      "Redis",
      "Docker",
      "CI/CD",
    ],
    knowsLanguage: ["English", "Urdu"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    birthDate: undefined,
    nationality: { "@type": "Country", name: "Pakistan" },
    sameAs: [],
    worksFor: experience.map((exp) => ({
      "@type": "Organization",
      name: exp.company,
      location: exp.location,
      description: exp.role,
    })),
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of South Asia",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Senior PHP Laravel Developer & Backend Architect",
      skills:
        "PHP, Laravel, MySQL, REST API, VICIdial, Asterisk PBX, OAuth2, JWT, Redis, Docker, CI/CD, SOLID Principles",
    },
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${profile.name} - Senior Laravel Development Services`,
    description: profile.bio,
    areaServed: [
      { "@type": "City", name: "Lahore" },
      { "@type": "Country", name: "Pakistan" },
    ],
    serviceType: [
      "Custom PHP/Laravel Development",
      "Backend Architecture Consulting",
      "Telephony & CRM Integration",
      "FinTech Platform Engineering",
      "API Design & Development",
      "Legacy System Migration",
      "Technical Team Leadership",
    ],
    email: profile.email,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    priceRange: "$$",
  };
}

export function structuredData() {
  return {
    "@graph": [personSchema(), professionalServiceSchema()],
  };
}
