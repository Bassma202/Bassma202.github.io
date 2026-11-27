/**
 * BASSMA ALAOUI SOSSEY — OFFICIAL CYBERSECURITY PORTFOLIO ENGINE
 * Features:
 * - Dual Theme Switcher (Nocturnal Dark / Archival Light) with LocalStorage
 * - Complete Bilingual Engine (English default / French)
 * - Command Palette (Cmd+K / Ctrl+K) full-site search
 * - Interactive Security Laboratory (JWT PEP, Modbus DPI, FAIR Risk Simulator)
 * - Interactive Cybersecurity Knowledge Atlas Inspector
 * - Deep-Dive Project Case Study Modal with Technical Tabs
 * - Live Filterable Applied & Academic Repository Archive
 * - Copy-to-Clipboard & Keyboard Accessibility (Escape handling)
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. THEME ENGINE (NOCTURNAL DARK / ARCHIVAL LIGHT)
     ========================================================================== */
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('bassma_theme', theme);
    if (themeIcon) {
      themeIcon.innerHTML = theme === 'archival' 
        ? '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'
        : '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
    }
  }

  const savedTheme = localStorage.getItem('bassma_theme') || 'archival';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'archival';
      const newTheme = currentTheme === 'archival' ? 'nocturnal' : 'archival';
      applyTheme(newTheme);
    });
  }

  /* ==========================================================================
     2. BILINGUAL CONTENT ENGINE (ENGLISH / FRENCH)
     ========================================================================== */
  const langEnBtn = document.getElementById('langEnBtn');
  const langFrBtn = document.getElementById('langFrBtn');

  const translations = {
    en: {
      "nav.about": "About",
      "nav.projects": "Flagship Engineering",
      "nav.archive": "Archive",
      "nav.atlas": "Knowledge Atlas",
      "nav.lab": "Security Lab",
      "nav.experience": "Experience",
      "nav.contact": "Contact",
      "nav.download_cv": "Download CV",
      "hero.status": "Seeking 4–6 Month PFE Internship (Feb 2027) • Paris, France, Morocco & Europe",
      "hero.title": "Engineering trust in <em>complex systems.</em>",
      "hero.sub": "Final-Year Cybersecurity Engineering Student at UEMF specializing in Zero-Trust Architecture, DevSecOps Automation, GRC & FAIR Quantitative Risk, and Defensive Detection Engineering.",
      "hero.cta_projects": "Explore Flagship Systems",
      "hero.cta_cv": "Executive Résumé",
      "hero.download_cv": "Download CV (PDF)",
      "hero.kicker_inst": "Observatory & Verified Metrics",
      "hero.inst_lbl1": "Open-Source Security Tools Tested via CI",
      "hero.inst_lbl2": "Annex A Controls Automated (ISO 27001)",
      "hero.inst_lbl3": "Cryptographic JWT PEP Verification Latency",
      "hero.inst_lbl4": "False Negatives Across ATT&CK Regressions",
      "flagship.kicker": "Defensive Systems Portfolio",
      "flagship.title": "Flagship Cybersecurity Architectures",
      "flagship.desc": "Production-grade, open-source security implementations equipped with automated verification suites, threat models, CI/CD gates, and verifiable evidence.",
      "archive.kicker": "Academic & Applied Catalogue",
      "archive.title": "Applied & Academic Repository Archive",
      "archive.desc": "Searchable registry of academic coursework, applied cybersecurity investigations, and software engineering projects from Euro-Mediterranean University of Fes.",
      "atlas.kicker": "System Architecture & Competencies",
      "atlas.title": "Cybersecurity Knowledge Atlas",
      "atlas.desc": "Explore the interconnected taxonomy of security domains, operational frameworks, programming languages, and verified project citations.",
      "lab.kicker": "Interactive Demonstrations",
      "lab.title": "Cybersecurity Interactive Laboratory",
      "lab.desc": "Inspect live demonstrations of architectural security concepts using simulated telemetry, token verification, and quantitative modeling.",
      "exp.kicker": "Career Trajectory",
      "exp.title": "Experience & Academic Milestones",
      "exp.desc": "Rigorous five-year engineering education (Bac+5 Grade Master) combined with healthcare cybersecurity risk assessment experience.",
      "resume.kicker": "Curriculum Vitae",
      "resume.title": "Executive Engineering Résumé",
      "resume.desc": "Download the verified 1-page vector PDF executive CVs in English and French, featuring quantified impact metrics and repository citations.",
      "contact.kicker": "Inquiries & Mobility",
      "contact.title": "Let's Discuss PFE Opportunities",
      "contact.desc": "Available for a 4 to 6-month End-of-Studies Engineering Internship (PFE) starting February 2027. Open to relocation in Paris / Île-de-France, throughout France, Morocco, and Europe."
    },
    fr: {
      "nav.about": "À Propos",
      "nav.projects": "Projets Phares",
      "nav.archive": "Archives",
      "nav.atlas": "Atlas des Savoirs",
      "nav.lab": "Laboratoire",
      "nav.experience": "Expérience",
      "nav.contact": "Contact",
      "nav.download_cv": "Télécharger CV",
      "hero.status": "Recherche Stage PFE (4–6 mois dès Fév. 2027) • Paris, France, Maroc & Europe",
      "hero.title": "Bâtir la confiance dans les <em>systèmes complexes.</em>",
      "hero.sub": "Élève-ingénieure en dernière année à l'UEMF, alliant gouvernance des risques (ISO 27001, EBIOS RM, FAIR), architecture IAM Zero-Trust, automatisation DevSecOps et ingénierie de détection SOC.",
      "hero.cta_projects": "Découvrir les Projets",
      "hero.cta_cv": "Télécharger le CV",
      "hero.download_cv": "Télécharger le CV (PDF)",
      "hero.kicker_inst": "Observatoire & Métriques Vérifiées",
      "hero.inst_lbl1": "Solutions de Sécurité Open-Source en CI",
      "hero.inst_lbl2": "Contrôles Annexe A Automatisés (ISO 27001)",
      "hero.inst_lbl3": "Temps de Validation JWT du PEP Cryptographique",
      "hero.inst_lbl4": "Faux Négatifs sur Régressions ATT&CK",
      "flagship.kicker": "Portfolio de Sécurité Défensive",
      "flagship.title": "Architectures de Cybersécurité Phares",
      "flagship.desc": "Implémentations de sécurité open-source de niveau ingénieur, dotées de suites de tests CI/CD, modèles de menaces et preuves vérifiables.",
      "archive.kicker": "Catalogue Académique & Appliqué",
      "archive.title": "Archive des Projets Appliqués & Académiques",
      "archive.desc": "Catalogue consultable des travaux universitaires, explorations de cybersécurité appliquée et projets d'ingénierie logicielle à l'UEMF.",
      "atlas.kicker": "Architecture & Compétences",
      "atlas.title": "Atlas des Connaissances en Cybersécurité",
      "atlas.desc": "Explorez la taxonomie interconnectée des piliers de la cybersécurité, référentiels méthodologiques, langages et projets associés.",
      "lab.kicker": "Démonstrations Interactives",
      "lab.title": "Laboratoire Interactif de Cybersécurité",
      "lab.desc": "Testez en direct des concepts d'architecture de sécurité : inspection de jetons JWT, filtrage DPI Modbus et simulation quantitative FAIR.",
      "exp.kicker": "Trajectoire Professionnelle",
      "exp.title": "Expérience & Formation Académique",
      "exp.desc": "Cursus d'ingénieur d'État en 5 ans (Bac+5 Grade Master, CPGE intégrées) et stage d'ingénieur en cybersécurité médicale.",
      "resume.kicker": "Curriculum Vitae",
      "resume.title": "Téléchargement du CV d'Ingénieur",
      "resume.desc": "Téléchargez le CV exécutif 1-page vectoriel en français ou en anglais, articulé autour de métriques d'impact et de réalisations vérifiées.",
      "contact.kicker": "Opportunités & Mobilité",
      "contact.title": "Échangeons sur votre Stage PFE",
      "contact.desc": "Disponible pour un stage de fin d'études (PFE) de 4 à 6 mois dès février 2027. Mobile sur Paris / Île-de-France, la France entière, le Maroc et l'Europe."
    }
  };

  function applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('bassma_lang', lang);

    if (langEnBtn && langFrBtn) {
      if (lang === 'fr') {
        langFrBtn.classList.add('active');
        langEnBtn.classList.remove('active');
      } else {
        langEnBtn.classList.add('active');
        langFrBtn.classList.remove('active');
      }
    }

    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Toggle language-specific blocks if present
    document.querySelectorAll('[data-lang-content]').forEach(el => {
      const targetLang = el.getAttribute('data-lang-content');
      el.style.display = targetLang === lang ? '' : 'none';
    });

    // Update CV download buttons dynamically to matched language
    const cvPath = lang === 'fr' 
      ? 'assets/docs/CV_Bassma_Alaoui_Sossey_AllRounder_FR.pdf' 
      : 'assets/docs/CV_Bassma_Alaoui_Sossey_AllRounder_EN.pdf';
    const navCvBtn = document.getElementById('navCvDownloadBtn');
    if (navCvBtn) navCvBtn.setAttribute('href', cvPath);
    const heroCvBtn = document.getElementById('heroCvDownloadBtn');
    if (heroCvBtn) heroCvBtn.setAttribute('href', cvPath);
  }

  const savedLang = localStorage.getItem('bassma_lang') || 'en';
  applyLanguage(savedLang);

  if (langEnBtn) langEnBtn.addEventListener('click', () => applyLanguage('en'));
  if (langFrBtn) langFrBtn.addEventListener('click', () => applyLanguage('fr'));

  /* ==========================================================================
     3. COMMAND PALETTE (CMD+K / CTRL+K)
     ========================================================================== */
  const cmdModal = document.getElementById('cmdModal');
  const cmdTriggerBtn = document.getElementById('cmdTriggerBtn');
  const cmdInput = document.getElementById('cmdInput');
  const cmdResultsList = document.getElementById('cmdResultsList');

  const searchableIndex = [
    { title: "AETHER — Industrial SCADA & Modbus Defense Lab", cat: "Flagship Project", action: () => openCaseStudy('aether') },
    { title: "VESPER — Windows DFIR & Atomic Threat Hunting Lab", cat: "Flagship Project", action: () => openCaseStudy('vesper') },
    { title: "CONSERVA — GRC Compliance Automation & FAIR Risk Engine", cat: "Flagship Project", action: () => openCaseStudy('conserva') },
    { title: "LIMEN — Zero-Trust IAM & OIDC API Gateway", cat: "Flagship Project", action: () => openCaseStudy('limen') },
    { title: "ALETHEIA — AI Security & LLM Guardrail Proxy", cat: "Flagship Project", action: () => openCaseStudy('aletheia') },
    { title: "FORGE — DevSecOps & Supply-Chain Security Agent", cat: "Flagship Project", action: () => openCaseStudy('forge') },
    { title: "Active Directory Security Assessment & Control Validation", cat: "Flagship Project", action: () => openCaseStudy('activedirectory') },
    { title: "Atlas SOC Detection Lab (Wazuh & Windows DC)", cat: "Applied Cybersecurity", url: "https://github.com/Bassma202/atlas-soc-detection-lab" },
    { title: "Android Secure Notes (FLAG_SECURE & Room)", cat: "Applied Cybersecurity", url: "https://github.com/Bassma202/android-secure-notes" },
    { title: "MedMentor Skin Lesion Deep Learning (ResNet18)", cat: "AI & Healthcare", url: "https://github.com/Bassma202/medmentor-deep-learning" },
    { title: "Decentralized Academic Assistant (Solidity & Viem)", cat: "Applied Systems", url: "https://github.com/Bassma202/decentralized-academic-assistant" },
    { title: "University Campus Network (Cisco Packet Tracer)", cat: "Network Engineering", url: "https://github.com/Bassma202/Projet-R-seau" },
    { title: "DataPathology Cybersecurity Internship Case Study", cat: "Professional Experience", target: "#experience" },
    { title: "Interactive Cybersecurity Knowledge Atlas", cat: "Architecture & Skills", target: "#atlas" },
    { title: "Interactive Security Laboratory Demos", cat: "Security Demos", target: "#laboratory" },
    { title: "Download English Executive CV (PDF)", cat: "Downloads", target: "#resume" },
    { title: "Download French Executive CV (PDF)", cat: "Downloads", target: "#resume" },
    { title: "Contact Bassma Alaoui Sossey", cat: "Inquiries", target: "#contact" }
  ];

  function openCommandPalette() {
    if (!cmdModal) return;
    cmdModal.classList.add('active');
    cmdInput.value = '';
    renderCmdResults(searchableIndex);
    setTimeout(() => cmdInput.focus(), 50);
  }

  function closeCommandPalette() {
    if (!cmdModal) return;
    cmdModal.classList.remove('active');
  }

  function renderCmdResults(items) {
    if (!cmdResultsList) return;
    if (items.length === 0) {
      cmdResultsList.innerHTML = '<div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No matching items found.</div>';
      return;
    }
    cmdResultsList.innerHTML = items.map((item, idx) => `
      <div class="cmd-item" data-index="${idx}">
        <span class="cmd-item-title">${item.title}</span>
        <span class="cmd-item-category">${item.cat}</span>
      </div>
    `).join('');

    cmdResultsList.querySelectorAll('.cmd-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = el.getAttribute('data-index');
        const selected = items[idx];
        closeCommandPalette();
        if (selected.action) selected.action();
        else if (selected.url) window.open(selected.url, '_blank');
        else if (selected.target) {
          const targetEl = document.querySelector(selected.target);
          if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  if (cmdTriggerBtn) cmdTriggerBtn.addEventListener('click', openCommandPalette);

  if (cmdInput) {
    cmdInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const filtered = searchableIndex.filter(i => 
        i.title.toLowerCase().includes(q) || i.cat.toLowerCase().includes(q)
      );
      renderCmdResults(filtered);
    });
  }

  // Global Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdModal && cmdModal.classList.contains('active')) closeCommandPalette();
      else openCommandPalette();
    } else if (e.key === 'Escape') {
      closeCommandPalette();
      closeCaseStudyModal();
    }
  });

  if (cmdModal) {
    cmdModal.addEventListener('click', (e) => {
      if (e.target === cmdModal) closeCommandPalette();
    });
  }

  /* ==========================================================================
     4. CASE STUDY MODAL ENGINE & CONTENT REPOSITORY
     ========================================================================== */
  const caseModal = document.getElementById('caseModal');
  const caseModalContent = document.getElementById('caseModalContent');
  const caseCloseBtn = document.getElementById('caseCloseBtn');

  const caseStudiesData = {
    aether: {
      name: "AETHER — SCADA/Modbus Industrial Defense Lab",
      domain: "Industrial Cybersecurity & OT/ICS Defense",
      repo: "https://github.com/Bassma202/scada-modbus-defense-lab",
      overview: "A bounded Modbus/TCP industrial security gateway and deep packet inspection (DPI) sensor designed to protect critical physical automation processes (such as pumping stations and water treatment infrastructure) from unauthorized command injection, replay attacks, and register tampering.",
      architecture: "Deployed as a fail-closed inline TCP proxy between the HMI/engineering workstation and simulated Programmable Logic Controllers (PLCs). Features an HMAC-SHA256 nonce validation engine for replay prevention, a bounded thread-safe register lock model ensuring deadlock-free concurrent reads, and authoritative PLC safety interlocks.",
      implementation: "Written in Python 3.12 utilizing PyModbus and Scapy. Validates Modbus Application Protocol (MBAP) headers, function codes (restricting write commands to authorized roles), and register boundary values. Generates live PCAP telemetry and correlates protocol anomalies directly with Suricata 7.0.8 intrusion detection rules.",
      evidence: "Verified via 27-thread race condition testing (zero deadlocks or state corruptions). Real TCP loopback benchmark demonstrated p50 latency of 0.292 ms and throughput of 3,040 req/s. Live PCAP attack capture triggered 4/4 Suricata rule alerts with 0 false positives."
    },
    vesper: {
      name: "VESPER — Windows Digital Forensics & Detection Engineering",
      domain: "Detection Engineering & SOC Forensics",
      repo: "https://github.com/Bassma202/windows-dfir-atomic-lab",
      overview: "A reproducible digital forensics and threat hunting laboratory integrating Atomic Red Team adversary emulation, automated Windows event collection, memory triage analysis, and isolated compilation of Sigma detection rules into Splunk SPL and Elastic ECS.",
      architecture: "Emulates 12 MITRE ATT&CK adversary chains covering Command & Scripting Interpreter execution (T1059.001), OS Credential Dumping via LSASS (T1003.001), and persistence mechanisms. Collects EVTX logs from Sysmon, PowerShell Module/ScriptBlock Logging, and Windows Security audits.",
      implementation: "Engineered automated extraction scripts leveraging python-evtx and defusedxml to safely parse raw event records into forensic case manifests. Built an isolated per-backend pySigma compilation pipeline enforcing strict logsource validation and preventing dialect regressions.",
      evidence: "Validated across dual CI runners (ubuntu-latest and windows-latest). Custom Sigma rules achieved 100% precision and 0% false positive rate across a 12-case regression dataset. Automated evidence triage slashed incident investigation duration by 55%."
    },
    conserva: {
      name: "CONSERVA — GRC Compliance Automation & FAIR Risk Engine",
      domain: "Cyber Governance, Compliance & Quantitative Risk",
      repo: "https://github.com/Bassma202/grc-compliance-automation-tool",
      overview: "A multi-tenant governance, risk, and compliance automation platform supporting automated evaluation of all 93 controls across the 4 themes of ISO/IEC 27001:2022 Annex A, Moroccan Law 09-08/CNDP requirements, EBIOS RM scenarios, and quantitative financial risk modeling.",
      architecture: "Built on FastAPI with a Bearer-authenticated multi-tenant SQLite persistence model. Encapsulates a compound Poisson–Beta-PERT Monte Carlo simulation engine implementing the Factor Analysis of Information Risk (FAIR) standard.",
      implementation: "Quantifies Annualized Loss Expectancy (ALE) and Value at Risk (VaR) in both MAD and EUR based on Threat Event Frequency, Vulnerability, and Loss Magnitude. Generates interactive executive dashboards prioritizing technical remediations according to quantified business exposure.",
      evidence: "Automated audit assessment reduced preparation time by 65%. Verified statistical accuracy against analytical expectations: simulation mean matched analytical mean within < 3% error and standard deviation within < 4% error."
    },
    limen: {
      name: "LIMEN — Zero-Trust IAM & OIDC API Gateway",
      domain: "Identity Governance & Access Architecture",
      repo: "https://github.com/Bassma202/zerotrust-iam-oidc-gateway",
      overview: "A high-performance Zero-Trust Policy Enforcement Point (PEP) and Identity Governance engine engineered to enforce strict least-privilege API access, cryptographic token verification, and automated toxic privilege separation (SoD).",
      architecture: "Integrates with Keycloak 26 (PostgreSQL 16) as the OpenID Connect Identity Provider. The PEP validates client-scoped RS256 JWT signatures against Keycloak's JSON Web Key Set (JWKS) with automatic key caching and rotation.",
      implementation: "Features an atomic 'BEGIN IMMEDIATE' SQLite state analyzer detecting toxic Segregation of Duties (SoD) privilege combinations (such as initiator/approver conflicts). Implements Jaccard similarity clustering for Role Mining to identify redundant or orphan entitlement assignments.",
      evidence: "Cryptographic signature validation and role assertion completed in < 1.2 ms per request. The SoD engine achieved 100% detection of toxic permission pairings, while Role Mining clustered privileges to eliminate 42% of redundant entitlement assignments."
    },
    aletheia: {
      name: "ALETHEIA — AI Security & LLM Guardrail Proxy",
      domain: "Artificial Intelligence Security & LLM Defense",
      repo: "https://github.com/Bassma202/llm-guardrail-security-proxy",
      overview: "An architectural security gateway protecting Large Language Models, Retrieval-Augmented Generation (RAG) pipelines, and Model Context Protocol (MCP) tool servers against the OWASP Top 10 for LLM Applications (2025).",
      architecture: "Operates as a pre- and post-inference proxy between client applications and LLM backends (tested with Ollama). Features Unicode canonicalization and Base64 deobfuscation to detect jailbreak payloads, an algorithmic PII scrubber (Luhn algorithm, French NIR, Moroccan CIN), and pre-retrieval RAG ACL filtering.",
      implementation: "Secures autonomous agent tool execution by validating JSON-RPC 2.0 MCP calls, checking tool schema allowlists, and neutralizing path traversal or symlink attacks before agent tool execution.",
      evidence: "A frozen held-out ablation test on 40 attack scenarios demonstrated a drop in Actual Policy Violations from 58.3% to 0.0% (95% Wilson CI [0.0%, 13.8%]), with a 0.0% false refusal rate on benign user queries and p50 guardrail inspection latency of 0.102 ms."
    },
    forge: {
      name: "FORGE — DevSecOps Automation & Supply-Chain Security",
      domain: "Secure Software Supply Chain & CI/CD Guardrails",
      repo: "https://github.com/Bassma202/ai-devsecops-telegram-agent",
      overview: "A secure CI/CD automation pipeline and Telegram-controlled ChatOps agent enforcing fail-closed security gates, policy-as-code validation, and cryptographic container image signing across the software lifecycle.",
      architecture: "Integrates GitLab CI and GitHub Actions workflows with Open Policy Agent (OPA Rego 1.1.0) admission policies, Trivy container scanning, Bandit Python SAST, and CycloneDX v1.5 Software Bill of Materials (SBOM) generation.",
      implementation: "Includes an Ed25519 digital signature verifier ensuring deployment manifests and binaries cannot be tampered with between staging and release. Features automated webhook telemetry alerting security engineers within seconds of build violations.",
      evidence: "8/8 OPA 1.1.0 policy validation tests pass; generated verified 67-component SBOM. Ed25519 verification successfully blocked 1-byte corrupted release candidates; webhook security notifications cut alert latency to < 30 seconds."
    },
    activedirectory: {
      name: "Active Directory Security Assessment & Control Validation",
      domain: "Enterprise Identity & Active Directory Hardening",
      repo: "https://github.com/Bassma202/atlas-soc-detection-lab",
      overview: "A comprehensive enterprise identity security assessment and hardening laboratory developed within a simulated corporate domain controller environment (ECYBER.local / atlas.local) running Windows Server.",
      architecture: "Incorporates Active Directory Domain Services (AD DS), DNS, Certificate Services (AD CS), Group Policy Objects (GPO), and Windows workstations. Emulates reconnaissance and lateral movement attacks using Kali Linux, LDAPDomainDump, BloodHound, and PingCastle.",
      implementation: "Assesses and remediates critical Active Directory attack vectors: LLMNR/NBT-NS poisoning mitigation via GPO, SMB signing enforcement to prevent NTLM relay attacks, LDAP signing and channel binding, and implementation of a tiered administrative access model.",
      evidence: "Extracted Active Directory graph topology with BloodHound to identify and sever shortest attack paths to Domain Admins. PingCastle posture assessment score improved substantially following baseline GPO hardening and auditing enablement."
    }
  };

  window.openCaseStudy = function(id) {
    const data = caseStudiesData[id];
    if (!data || !caseModal || !caseModalContent) return;

    caseModalContent.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span class="badge badge-brass" style="margin-bottom: 0.6rem;">${data.domain}</span>
        <h2 style="font-family: var(--font-serif); font-size: 1.85rem; color: var(--text-primary); margin-bottom: 0.5rem;">${data.name}</h2>
        <a href="${data.repo}" target="_blank" rel="noopener noreferrer" class="card-link" style="color: var(--accent-brass);">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          <span>View Verified GitHub Repository & Tests</span>
        </a>
      </div>

      <div class="case-tabs" id="modalCaseTabs">
        <button class="case-tab-btn active" data-tab="overview">Overview</button>
        <button class="case-tab-btn" data-tab="architecture">Architecture & Boundaries</button>
        <button class="case-tab-btn" data-tab="implementation">Controls & Defense</button>
        <button class="case-tab-btn" data-tab="evidence">Verified Evidence & Benchmarks</button>
      </div>

      <div id="caseTabContent" style="font-size: 0.92rem; line-height: 1.7; color: var(--text-secondary);">
        ${data.overview}
      </div>
    `;

    const tabBtns = caseModalContent.querySelectorAll('.case-tab-btn');
    const tabContentEl = document.getElementById('caseTabContent');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tab = btn.getAttribute('data-tab');
        tabContentEl.innerHTML = data[tab];
      });
    });

    caseModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeCaseStudyModal() {
    if (!caseModal) return;
    caseModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (caseCloseBtn) caseCloseBtn.addEventListener('click', closeCaseStudyModal);
  if (caseModal) {
    caseModal.addEventListener('click', (e) => {
      if (e.target === caseModal) closeCaseStudyModal();
    });
  }

  // Bind project cards
  document.querySelectorAll('[data-open-case]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const caseId = btn.getAttribute('data-open-case');
      openCaseStudy(caseId);
    });
  });

  /* ==========================================================================
     5. INTERACTIVE SECURITY LABORATORY DEMONSTRATIONS
     ========================================================================== */
  // Demo 1: Zero-Trust JWT PEP Inspector
  const jwtPersonaSelect = document.getElementById('jwtPersonaSelect');
  const jwtOutputConsole = document.getElementById('jwtOutputConsole');
  const jwtRunBtn = document.getElementById('jwtRunBtn');

  const personas = {
    auditor: {
      sub: "usr_auditor_92",
      role: "Compliance_Auditor",
      tenant: "tenant_health_01",
      perms: ["read:iso27001", "read:ebios_rm", "export:audit_logs"],
      status: "ALLOWED (200 OK)",
      reason: "Valid RS256 signature, tenant claims verified, read-only audit scope granted.",
      color: "var(--accent-emerald)"
    },
    admin: {
      sub: "usr_admin_04",
      role: "Security_Engineer",
      tenant: "tenant_health_01",
      perms: ["read:*", "write:security_policy", "deploy:pep_gateway"],
      status: "ALLOWED (200 OK)",
      reason: "Valid RS256 signature, administrator role assertion verified via Keycloak JWKS.",
      color: "var(--accent-emerald)"
    },
    unauthorized: {
      sub: "usr_guest_81",
      role: "Public_Guest",
      tenant: "tenant_external",
      perms: ["read:public_metadata"],
      status: "DENIED (403 Forbidden)",
      reason: "Cross-tenant access blocked by PEP policy; missing required role 'Compliance_Auditor'.",
      color: "var(--accent-crimson)"
    }
  };

  if (jwtRunBtn && jwtPersonaSelect && jwtOutputConsole) {
    jwtRunBtn.addEventListener('click', () => {
      const selected = personas[jwtPersonaSelect.value] || personas.auditor;
      jwtOutputConsole.innerHTML = `
        <div style="font-family: var(--font-mono); font-size: 0.74rem;">
          <div style="color: ${selected.color}; font-weight: 600; margin-bottom: 0.35rem;">
            [PEP VERDICT] ${selected.status} — Validation in 0.84 ms
          </div>
          <div style="color: var(--text-secondary); margin-bottom: 0.2rem;">
            Token Sub: <span style="color: var(--text-primary);">${selected.sub}</span> | Role: <span style="color: var(--text-primary);">${selected.role}</span>
          </div>
          <div style="color: var(--text-muted); font-size: 0.7rem;">
            ${selected.reason}
          </div>
        </div>
      `;
    });
  }

  // Demo 2: Modbus DPI Firewall Simulator
  const modbusScenarioSelect = document.getElementById('modbusScenarioSelect');
  const modbusOutputConsole = document.getElementById('modbusOutputConsole');
  const modbusRunBtn = document.getElementById('modbusRunBtn');

  const modbusScenarios = {
    fc03: {
      fc: "FC03 (Read Holding Registers)",
      unit: "Unit ID: 0x01",
      action: "ALLOWED (PASS)",
      desc: "Authorized read telemetry from registers 40001–40010. Within safety bounds.",
      color: "var(--accent-emerald)"
    },
    fc05: {
      fc: "FC05 (Write Single Coil)",
      unit: "Unit ID: 0x01",
      action: "DENIED (BLOCKED)",
      desc: "Unauthorized write to coil 0x0002 without RBAC execution token. Packet dropped.",
      color: "var(--accent-crimson)"
    },
    fc90: {
      fc: "FC90 (Custom Proprietary Function)",
      unit: "Unit ID: 0x01",
      action: "BLOCKED & ALERTED (SURICATA SIG 20281)",
      desc: "Anomalous function code injection detected on port 502. Automated alert dispatched.",
      color: "var(--accent-amber)"
    }
  };

  if (modbusRunBtn && modbusScenarioSelect && modbusOutputConsole) {
    modbusRunBtn.addEventListener('click', () => {
      const scen = modbusScenarios[modbusScenarioSelect.value] || modbusScenarios.fc03;
      modbusOutputConsole.innerHTML = `
        <div style="font-family: var(--font-mono); font-size: 0.74rem;">
          <div style="color: ${scen.color}; font-weight: 600; margin-bottom: 0.35rem;">
            [DPI INSPECTION] ${scen.action}
          </div>
          <div style="color: var(--text-secondary); margin-bottom: 0.2rem;">
            ${scen.fc} • ${scen.unit}
          </div>
          <div style="color: var(--text-muted); font-size: 0.7rem;">
            ${scen.desc}
          </div>
        </div>
      `;
    });
  }

  // Demo 3: FAIR Quantitative Risk Calculator
  const fairTefInput = document.getElementById('fairTefInput');
  const fairVulnInput = document.getElementById('fairVulnInput');
  const fairLossInput = document.getElementById('fairLossInput');
  const fairOutputConsole = document.getElementById('fairOutputConsole');
  const fairCalcBtn = document.getElementById('fairCalcBtn');

  function calculateFairRisk() {
    if (!fairTefInput || !fairVulnInput || !fairLossInput || !fairOutputConsole) return;
    const tef = parseFloat(fairTefInput.value) || 2.5;
    const vuln = parseFloat(fairVulnInput.value) || 35;
    const loss = parseFloat(fairLossInput.value) || 50000;

    const lefte = tef * (vuln / 100);
    const aleEur = lefte * loss;
    const aleMad = aleEur * 10.8;

    fairOutputConsole.innerHTML = `
      <div style="font-family: var(--font-mono); font-size: 0.74rem;">
        <div style="color: var(--accent-brass); font-weight: 600; margin-bottom: 0.35rem;">
          Expected Annualized Loss (ALE): €${Math.round(aleEur).toLocaleString()} (~${Math.round(aleMad).toLocaleString()} MAD)
        </div>
        <div style="color: var(--text-secondary); font-size: 0.7rem;">
          Annual Loss Event Frequency: ${lefte.toFixed(2)} events/year | 90th Pct VaR: €${Math.round(aleEur * 1.85).toLocaleString()}
        </div>
      </div>
    `;
  }

  if (fairCalcBtn) fairCalcBtn.addEventListener('click', calculateFairRisk);

  /* ==========================================================================
     6. KNOWLEDGE ATLAS INTERACTIVE INSPECTOR
     ========================================================================== */
  const atlasNodes = document.querySelectorAll('.atlas-node-card');
  const atlasInspector = document.getElementById('atlasInspectorContent');

  const atlasData = {
    grc: {
      title: "Governance, Risk & Compliance (GRC)",
      desc: "Engineering structured security policies, regulatory mappings, and quantitative loss simulations.",
      standards: "ISO/IEC 27001:2022 (93 Annexe A controls), EBIOS RM, FAIR Quantitative Risk, Moroccan Law 09-08/CNDP, GDPR",
      tools: "Python FastAPI, SQLite, Monte Carlo Poisson-PERT engine, Markdown / JSON reporting",
      project: "CONSERVA (grc-compliance-automation-tool) & DataPathology Internship"
    },
    iam: {
      title: "Identity & Access Management (Zero Trust)",
      desc: "Enforcing cryptographic perimeter-less API authorization, least privilege, and role governance.",
      standards: "Zero-Trust Architecture (NIST SP 800-207), OAuth 2.0 / OpenID Connect, JWT RS256/JWKS, RBAC/ABAC",
      tools: "Keycloak 26, PostgreSQL 16, Python PEP, Docker, Jaccard Similarity Role Mining",
      project: "LIMEN (zerotrust-iam-oidc-gateway) & Active Directory Lab"
    },
    devsecops: {
      title: "Secure Software Supply Chain & DevSecOps",
      desc: "Embedding automated policy guardrails, cryptographic provenance, and vulnerability scanning in CI/CD.",
      standards: "Open Policy Agent (OPA Rego 1.1.0), CycloneDX v1.5 SBOM, SLSA supply-chain principles",
      tools: "GitLab CI/CD, GitHub Actions, Docker, Trivy, Bandit SAST, Ed25519 signing",
      project: "FORGE (ai-devsecops-telegram-agent)"
    },
    detection: {
      title: "Detection Engineering & SOC Forensics",
      desc: "Translating adversary telemetry into high-fidelity detection rules and automated digital triage.",
      standards: "MITRE ATT&CK (Enterprise), Sigma rule standard, EVTX event logging (Sysmon)",
      tools: "pySigma, Atomic Red Team, python-evtx, Splunk SPL, Elastic ECS, Wazuh SIEM",
      project: "VESPER (windows-dfir-atomic-lab) & Atlas SOC Lab"
    },
    scada: {
      title: "Industrial & Cyber-Physical Security (OT/ICS)",
      desc: "Securing SCADA architectures and industrial fieldbus protocols against unauthorized control injections.",
      standards: "IEC 62443, Modbus Application Protocol v1.1b, MITRE ATT&CK for ICS",
      tools: "Scapy, PyModbus, Suricata 7.0.8, Wireshark, PLC register lock simulations",
      project: "AETHER (scada-modbus-defense-lab)"
    },
    aisec: {
      title: "Artificial Intelligence & LLM Security",
      desc: "Neutralizing prompt injections, enforcing pre-retrieval RAG boundaries, and securing autonomous agent MCP tools.",
      standards: "OWASP Top 10 for LLM Applications (2025), Model Context Protocol (MCP JSON-RPC)",
      tools: "Ollama, FastAPI, PII scrubbers (Luhn/NIR/CIN), Unicode canonicalizer",
      project: "ALETHEIA (llm-guardrail-security-proxy) & MedMentor"
    }
  };

  atlasNodes.forEach(node => {
    node.addEventListener('click', () => {
      atlasNodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');
      const domain = node.getAttribute('data-domain');
      const info = atlasData[domain];
      if (info && atlasInspector) {
        atlasInspector.innerHTML = `
          <div style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--accent-brass); margin-bottom: 0.4rem;">
            ${info.title}
          </div>
          <div style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1rem;">
            ${info.desc}
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; font-family: var(--font-mono); font-size: 0.78rem;">
            <div style="background: var(--bg-surface); padding: 0.85rem; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <div style="color: var(--text-muted); font-size: 0.68rem; text-transform: uppercase; margin-bottom: 0.25rem;">Standards & Frameworks</div>
              <div style="color: var(--text-primary);">${info.standards}</div>
            </div>
            <div style="background: var(--bg-surface); padding: 0.85rem; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <div style="color: var(--text-muted); font-size: 0.68rem; text-transform: uppercase; margin-bottom: 0.25rem;">Tooling & Languages</div>
              <div style="color: var(--text-primary);">${info.tools}</div>
            </div>
            <div style="background: var(--bg-surface); padding: 0.85rem; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <div style="color: var(--text-muted); font-size: 0.68rem; text-transform: uppercase; margin-bottom: 0.25rem;">Verified Implementations</div>
              <div style="color: var(--accent-brass); font-weight: 600;">${info.project}</div>
            </div>
          </div>
        `;
      }
    });
  });

  /* ==========================================================================
     7. APPLIED & ACADEMIC REPOSITORY ARCHIVE FILTER & SEARCH
     ========================================================================== */
  const archiveFilterPills = document.querySelectorAll('.filter-pill');
  const archiveSearchInput = document.getElementById('archiveSearchInput');
  const archiveRows = document.querySelectorAll('.archive-row');

  function filterArchiveTable() {
    const activePill = document.querySelector('.filter-pill.active');
    const category = activePill ? activePill.getAttribute('data-filter') : 'all';
    const query = archiveSearchInput ? archiveSearchInput.value.toLowerCase().trim() : '';

    archiveRows.forEach(row => {
      const rowCat = row.getAttribute('data-category') || '';
      const rowText = row.innerText.toLowerCase();

      const matchesCat = category === 'all' || rowCat === category;
      const matchesQuery = query === '' || rowText.includes(query);

      row.style.display = (matchesCat && matchesQuery) ? '' : 'none';
    });
  }

  archiveFilterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      archiveFilterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      filterArchiveTable();
    });
  });

  if (archiveSearchInput) {
    archiveSearchInput.addEventListener('input', filterArchiveTable);
  }

  /* ==========================================================================
     8. EMAIL COPY-TO-CLIPBOARD FUNCTIONALITY
     ========================================================================== */
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailTextEl = document.getElementById('emailText');

  if (copyEmailBtn && emailTextEl) {
    copyEmailBtn.addEventListener('click', () => {
      const email = emailTextEl.innerText.trim();
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyEmailBtn.innerText;
        copyEmailBtn.innerText = 'Copied!';
        copyEmailBtn.style.background = 'var(--accent-brass)';
        copyEmailBtn.style.color = '#0D1017';

        setTimeout(() => {
          copyEmailBtn.innerText = originalText;
          copyEmailBtn.style.background = '';
          copyEmailBtn.style.color = '';
        }, 2200);
      }).catch(err => {
        console.error('Copy failed: ', err);
      });
    });
  }

  /* ==========================================================================
     9. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
});
