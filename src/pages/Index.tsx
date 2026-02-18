import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
  Shield, Target, Users, Award, BookOpen, ChevronDown,
  Star, Crosshair, Scale, Eye, Briefcase, GraduationCap
} from "lucide-react";

import hrImg from "@/assets/departments/hr.png";
import cidImg from "@/assets/departments/cid.png";
import fibcoImg from "@/assets/departments/fibco.png";
import tdImg from "@/assets/departments/td.png";
import cirgImg from "@/assets/departments/cirg.png";
import prImg from "@/assets/departments/pr.png";
import lawImg from "@/assets/departments/law.png";

const sections = [
  { id: "ic-ooc", label: "IC & OOC Informationen", icon: BookOpen },
  { id: "motivation", label: "Motivation", icon: Target },
  { id: "qualities", label: "Leader Qualitäten", icon: Award },
  { id: "rp-improvements", label: "RP Verbesserungen", icon: Star },
  { id: "departments", label: "Abteilungskonzept", icon: Briefcase },
  { id: "ranks", label: "Rangkonzept", icon: GraduationCap },
  { id: "closing", label: "Schlusswort", icon: Shield },
];

const qualities = [
  { title: "Führungskompetenz", desc: "Erfahrung in der Leitung und Koordination von Teams innerhalb einer Organisation.", icon: Users },
  { title: "Strategisches Denken", desc: "Fähigkeit, langfristige Konzepte zu entwickeln und umzusetzen.", icon: Target },
  { title: "Kommunikation", desc: "Klare, respektvolle Kommunikation mit allen Mitgliedern und externen Parteien.", icon: BookOpen },
  { title: "Fairness", desc: "Objektive und gerechte Entscheidungsfindung in allen Situationen.", icon: Scale },
  { title: "Aktivität & Präsenz", desc: "Konstante Anwesenheit und aktive Beteiligung am täglichen Geschehen.", icon: Eye },
];

const rpImprovements = [
  { title: "Realistische Einsatzprotokolle", desc: "Einführung standardisierter Abläufe für Ermittlungen, Festnahmen und Razzien." },
  { title: "Interne Fortbildungen", desc: "Regelmäßige Schulungen und RP-Trainings für alle Mitglieder." },
  { title: "Inter-Org Kooperationen", desc: "Strukturierte Zusammenarbeit mit anderen Organisationen für gemeinsame Einsätze." },
  { title: "Aktenführung & Dokumentation", desc: "Digitale Fallakten und Dokumentation aller laufenden Ermittlungen." },
  { title: "Event-basiertes RP", desc: "Regelmäßige Story-Arcs und Events, die das RP bereichern und Mitglieder einbinden." },
];

const departments = [
  { name: "Human Resources (HR)", tasks: "Kümmert sich um die Bewerbungen neuer Agenten und erstellt das Bewerbungskonzept. Sie bearbeiten die Bewerbungen und führen die Gespräche. Dazu gehören auch die Orgawechsel und die internen Rankups.", icon: Users, img: hrImg },
  { name: "Criminal Investigation Division (CID)", tasks: "Die CID sammelt Beweise gegen kriminelle Strukturen. Durch ihre Arbeit werden die Anträge auf Razzien und den Terrorstatus gestellt. Ein weiterer wichtiger Bereich ist die Undercover-Wantedjagd – so fahnden sie nach Kriminellen, ohne erkannt zu werden.", icon: Crosshair, img: cidImg },
  { name: "Corruption Office (FIBCO)", tasks: "Die FIBCO ist für die Bekämpfung von Korruption innerhalb staatlicher Einrichtungen zuständig. Sie arbeitet mit der Justiz zusammen, leitet eigenständige Ermittlungen und vollstreckt erlassene Haftbefehle.", icon: Eye, img: fibcoImg },
  { name: "Trainings Division (TD)", tasks: "Kümmert sich um die Ausbildungen der Agents, wertet Arbeitszeugnisse aus und vermittelt wichtiges Wissen, das die Mitarbeiter für den Dienst benötigen.", icon: GraduationCap, img: tdImg },
  { name: "Critical Incident Response Group (CIRG)", tasks: "Die CIRG ist die Spezialeinheit des FIB. Die Agents werden speziell ausgebildet, um in jeglichen Krisensituationen zu reagieren. Außerdem kümmert sich die CIRG um die Planung und Ausführung der Events.", icon: Shield, img: cirgImg },
  { name: "Public Relations (PR)", tasks: "Die PR ist die Presseabteilung des FIB. Sie kümmert sich um Pressekonferenzen und die Kommunikation mit den Bürgern. Sie arbeitet mit der HR zusammen, um offene Bewerbungsphasen anzukündigen.", icon: BookOpen, img: prImg },
  { name: "LAW", tasks: "Die LAW ist die Juraabteilung des FIB. Sie kümmert sich um die Jura-Schulung der Mitarbeiter.", icon: Scale, img: lawImg },
];

const ranks = [
  "Visitor", "Suspended", "Vacation", "Facility Manager", "Platzhalter",
  "Praktikant", "Agent in Education", "Field Agent", "Agent", "First Class Agent",
  "Federal Agent", "Private Agent", "Senior Agent", "Special Agent", "Senior Special Agent",
  "Commander", "Elite Agent", "Investigator", "Administration of HR", "Lead Field Agent",
  "Supervisory Agent (Media)", "Lead Special Agent", "Lead Head Agent",
  "Deputy Division Chief", "Division Chief", "Chief of Staff",
  "Curator of Divisions", "Assistant Director of FIB", "Deputy Director of FIB", "Director of FIB",
].map((name, i) => ({ number: String(i + 1).padStart(2, "0"), name }));

const rankTiers = [
  { label: "Sonstiges (1–6)", color: "bg-card text-muted-foreground border border-border/50", range: [0, 6] },
  { label: "Agent (7–12)", color: "bg-muted text-foreground", range: [6, 12] },
  { label: "Command (13–16)", color: "bg-secondary text-foreground", range: [12, 16] },
  { label: "Highcommand (17–23)", color: "bg-primary/20 text-foreground", range: [16, 23] },
  { label: "Abteilungsleiter / Curator / Personalverwaltung (24–27)", color: "bg-primary/40 text-foreground", range: [23, 27] },
  { label: "Head Leaderschaft + Leaderschaft (28–30)", color: "bg-primary text-primary-foreground", range: [27, 30] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const SectionTitle = ({ children, id }: { children: React.ReactNode; id: string }) => (
  <motion.div
    id={id}
    className="scroll-mt-24 mb-10"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">{children}</h2>
    <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-primary/3 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-8 border-primary/30 text-primary px-5 py-2 text-xs tracking-[0.3em] uppercase backdrop-blur-sm bg-primary/5">
              Federal Investigation Bureau
            </Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Bewerbung als{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/60">
              Leader
            </span>{" "}
            des FIB
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-12 tracking-[0.2em] uppercase font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Struktur · Führung · Professionelles Roleplay
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button size="lg" className="text-base font-semibold px-10 h-12 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow" asChild>
              <a href="#agenda">Zur Bewerbung</a>
            </Button>
            <Button size="lg" variant="outline" className="text-base border-primary/20 hover:bg-primary/5 hover:border-primary/40 px-10 h-12 backdrop-blur-sm transition-all" asChild>
              <a href="#agenda">Agenda ansehen</a>
            </Button>
          </motion.div>

          <motion.a
            href="#agenda"
            className="inline-block mt-20 text-primary/60 hover:text-primary transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.a>
        </motion.div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pb-24 space-y-32">
        {/* AGENDA */}
        <section id="agenda" className="scroll-mt-24">
          <SectionTitle id="agenda-title">Agenda</SectionTitle>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {sections.map((s, i) => (
              <motion.a key={s.id} href={`#${s.id}`} className="group" variants={fadeUp}>
                <Card className="bg-card/40 border-border/30 hover:border-primary/40 hover:bg-card/80 transition-all duration-500 cursor-pointer backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center text-primary group-hover:from-primary/25 group-hover:to-primary/10 transition-all duration-500">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-muted-foreground/60 font-mono tracking-wider">{String(i + 1).padStart(2, "0")}</span>
                      <p className="text-sm font-medium text-foreground">{s.label}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </motion.div>
        </section>

        {/* IC & OOC */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
        >
          <SectionTitle id="ic-ooc">IC & OOC Informationen</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp}>
              <Card className="bg-card/40 border-border/30 backdrop-blur-sm h-full hover:border-primary/20 transition-colors duration-500">
                <CardHeader>
                  <CardTitle className="text-primary text-xl flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    IC – In Character
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  {[
                    ["Name", "[IC Name]"],
                    ["Alter", "[IC Alter]"],
                    ["Dienstzeit", "[IC Dienstzeit]"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between border-b border-border/20 pb-3">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="text-foreground font-medium">{value}</span>
                    </div>
                  ))}
                  <div className="pt-2">
                    <p className="text-muted-foreground mb-2 text-xs uppercase tracking-wider">Werdegang</p>
                    <p className="text-foreground leading-relaxed">[Hier kommt eure IC Beschreibung hin – Werdegang, Vision, Erfahrung des Charakters.]</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="bg-card/40 border-border/30 backdrop-blur-sm h-full hover:border-primary/20 transition-colors duration-500">
                <CardHeader>
                  <CardTitle className="text-primary text-xl flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse [animation-delay:0.5s]" />
                    OOC – Out of Character
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  {[
                    ["Alter", "[OOC Alter]"],
                    ["Onlinezeiten", "[Onlinezeiten]"],
                    ["RP Erfahrung", "[RP Erfahrung]"],
                    ["Führungserfahrung", "[Führungserfahrung]"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between border-b border-border/20 pb-3">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="text-foreground font-medium">{value}</span>
                    </div>
                  ))}
                  <div className="pt-2">
                    <p className="text-muted-foreground mb-2 text-xs uppercase tracking-wider">Über mich</p>
                    <p className="text-foreground leading-relaxed">[Hier kommt eure OOC Beschreibung hin – Motivation, Verantwortungsbewusstsein, Aktivität.]</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* MOTIVATION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <SectionTitle id="motivation">Warum ich Leader werden möchte</SectionTitle>
          <Card className="bg-gradient-to-br from-card/60 to-card/30 border-border/30 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <CardContent className="p-8 md:p-10 relative">
              <p className="text-foreground leading-relaxed mb-8 text-lg">
                [Hier beschreibt ihr, warum ihr die Leitung des FIB übernehmen möchtet. Was treibt euch an? Welche Vision habt ihr für die Organisation?]
              </p>
              <ul className="space-y-4">
                {["[Motivationspunkt 1]", "[Motivationspunkt 2]", "[Motivationspunkt 3]"].map((p, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        {/* QUALITIES */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
        >
          <SectionTitle id="qualities">Was mich als Leader auszeichnet</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {qualities.map((q) => (
              <motion.div key={q.title} variants={fadeUp}>
                <Card className="bg-card/40 border-border/30 hover:border-primary/30 transition-all duration-500 backdrop-blur-sm group hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center text-primary mb-4 group-hover:from-primary/25 group-hover:to-primary/10 transition-all duration-500">
                      <q.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">{q.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{q.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* RP IMPROVEMENTS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
        >
          <SectionTitle id="rp-improvements">Vorschläge zur Verbesserung des Roleplays</SectionTitle>
          <div className="space-y-4">
            {rpImprovements.map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="bg-card/40 border-border/30 backdrop-blur-sm hover:border-primary/20 transition-all duration-500 group hover:bg-card/60">
                  <CardContent className="flex items-start gap-6 p-6">
                    <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary/40 to-primary/10 font-mono mt-0.5 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1.5 text-base group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* DEPARTMENTS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
        >
          <SectionTitle id="departments">Abteilungskonzept</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-5">
            {departments.map((dept) => (
              <motion.div key={dept.name} variants={fadeUp}>
                <Card className="bg-card/40 border-border/30 hover:border-primary/30 transition-all duration-500 backdrop-blur-sm group hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 h-full overflow-hidden">
                   <div className="flex items-center justify-center pt-6 px-6">
                     <img src={dept.img} alt={dept.name} className="w-20 h-20 object-contain rounded-xl" />
                   </div>
                   <CardContent className="p-6 pt-4">
                     <h3 className="font-semibold text-foreground mb-2 text-base">{dept.name}</h3>
                     <p className="text-sm text-muted-foreground leading-relaxed">{dept.tasks}</p>
                   </CardContent>
                 </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* RANKS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
        >
          <SectionTitle id="ranks">Rangkonzept</SectionTitle>
          <div className="space-y-8">
            {rankTiers.map((tier) => (
              <motion.div key={tier.label} variants={fadeUp}>
                <Badge className={`${tier.color} mb-4 text-xs tracking-wider`}>{tier.label}</Badge>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                  {ranks.slice(tier.range[0], tier.range[1]).map((r) => (
                    <div key={r.number} className="bg-card/30 border border-border/20 rounded-lg px-3 py-3 text-center backdrop-blur-sm hover:border-primary/20 hover:bg-card/50 transition-all duration-300 group">
                      <span className="text-xs text-primary font-mono font-semibold">{r.number}</span>
                      <p className="text-xs text-muted-foreground mt-1 group-hover:text-foreground transition-colors">{r.name}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp}>
            <Card className="bg-card/40 border-border/30 backdrop-blur-sm mt-8">
              <CardContent className="p-6 space-y-3 text-sm">
                {[
                  ["Beförderungskriterien", "[Kriterien hier eintragen]"],
                  ["Aktivitätsanforderung", "[Anforderung hier eintragen]"],
                  ["Interne Bewertungen", "[Bewertungssystem hier beschreiben]"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-border/20 pb-3">
                    <span className="text-muted-foreground">{label}</span>
                    <span className="text-foreground">{value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* CLOSING */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <SectionTitle id="closing">Schlusswort</SectionTitle>
          <Card className="bg-gradient-to-br from-card/60 to-card/30 border-border/30 border-l-4 border-l-primary backdrop-blur-sm overflow-hidden relative">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <CardContent className="p-8 md:p-10 relative">
              <p className="text-foreground leading-relaxed italic text-lg">
                [Hier kommt euer abschließender Text hin – Zusammenfassung eurer Vision, Dank an die Leser, und warum ihr der richtige Kandidat für die Leitung des FIB seid.]
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <Separator className="bg-border/20" />

        {/* FOOTER */}
        <footer className="text-center text-sm text-muted-foreground/60 pb-8">
          <p className="tracking-wider uppercase text-xs">FIB Leader Bewerbung · Alle Angaben sind Platzhalter</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
