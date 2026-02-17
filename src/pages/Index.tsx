import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Shield, Target, Users, Award, BookOpen, ChevronDown,
  Star, Crosshair, Scale, Eye, Briefcase, GraduationCap
} from "lucide-react";

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
  { name: "Internal Affairs", tasks: "Interne Ermittlungen, Disziplinarverfahren, Qualitätskontrolle der Einsätze.", icon: Eye },
  { name: "Criminal Investigation", tasks: "Schwerkriminalität, Mordermittlung, organisierte Kriminalität.", icon: Crosshair },
  { name: "Special Operations", tasks: "Hochrisiko-Einsätze, Zugriffe, Spezialeinheit für besondere Lagen.", icon: Shield },
  { name: "Training Academy", tasks: "Ausbildung neuer Agenten, Fortbildungsprogramme, Prüfungen.", icon: GraduationCap },
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
  { label: "Sonstiges", color: "bg-card text-muted-foreground", range: [0, 5] },
  { label: "Ausbildung", color: "bg-muted text-foreground", range: [5, 8] },
  { label: "Operative Ebene", color: "bg-secondary text-foreground", range: [8, 20] },
  { label: "Management", color: "bg-primary/20 text-foreground", range: [20, 25] },
  { label: "Führungsebene", color: "bg-primary text-primary-foreground", range: [25, 30] },
];

const SectionTitle = ({ children, id }: { children: React.ReactNode; id: string }) => (
  <div id={id} className="scroll-mt-24 mb-8">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{children}</h2>
    <div className="w-20 h-1 bg-primary rounded-full" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-6 border-primary/40 text-primary px-4 py-1.5 text-sm tracking-widest uppercase">
            Federal Investigation Bureau
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
            Bewerbung als <span className="text-primary">Leader</span> des FIB
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 tracking-wide">
            Struktur · Führung · Professionelles Roleplay
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base font-semibold" asChild>
              <a href="#agenda">Zur Bewerbung</a>
            </Button>
            <Button size="lg" variant="outline" className="text-base border-primary/30 hover:bg-primary/10" asChild>
              <a href="#agenda">Agenda ansehen</a>
            </Button>
          </div>
          <a href="#agenda" className="inline-block mt-16 animate-bounce text-primary">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pb-24 space-y-24">
        {/* AGENDA */}
        <section id="agenda" className="scroll-mt-24">
          <SectionTitle id="agenda-title">Agenda</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((s, i) => (
              <a key={s.id} href={`#${s.id}`} className="group">
                <Card className="bg-card/60 border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300 cursor-pointer">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                      <p className="text-sm font-medium text-foreground">{s.label}</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* IC & OOC */}
        <section>
          <SectionTitle id="ic-ooc">IC & OOC Informationen</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/60 border-border/50">
              <CardHeader>
                <CardTitle className="text-primary text-xl">IC – In Character</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                {[
                  ["Name", "[IC Name]"],
                  ["Alter", "[IC Alter]"],
                  ["Dienstzeit", "[IC Dienstzeit]"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-border/30 pb-2">
                    <span className="text-muted-foreground">{label}</span>
                    <span className="text-foreground font-medium">{value}</span>
                  </div>
                ))}
                <div className="pt-2">
                  <p className="text-muted-foreground mb-1">Werdegang</p>
                  <p className="text-foreground leading-relaxed">[Hier kommt eure IC Beschreibung hin – Werdegang, Vision, Erfahrung des Charakters.]</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/60 border-border/50">
              <CardHeader>
                <CardTitle className="text-primary text-xl">OOC – Out of Character</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                {[
                  ["Alter", "[OOC Alter]"],
                  ["Onlinezeiten", "[Onlinezeiten]"],
                  ["RP Erfahrung", "[RP Erfahrung]"],
                  ["Führungserfahrung", "[Führungserfahrung]"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-border/30 pb-2">
                    <span className="text-muted-foreground">{label}</span>
                    <span className="text-foreground font-medium">{value}</span>
                  </div>
                ))}
                <div className="pt-2">
                  <p className="text-muted-foreground mb-1">Über mich</p>
                  <p className="text-foreground leading-relaxed">[Hier kommt eure OOC Beschreibung hin – Motivation, Verantwortungsbewusstsein, Aktivität.]</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* MOTIVATION */}
        <section>
          <SectionTitle id="motivation">Warum ich Leader werden möchte</SectionTitle>
          <Card className="bg-card/60 border-border/50">
            <CardContent className="p-6 md:p-8">
              <p className="text-foreground leading-relaxed mb-6">
                [Hier beschreibt ihr, warum ihr die Leitung des FIB übernehmen möchtet. Was treibt euch an? Welche Vision habt ihr für die Organisation?]
              </p>
              <ul className="space-y-3">
                {["[Motivationspunkt 1]", "[Motivationspunkt 2]", "[Motivationspunkt 3]"].map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* QUALITIES */}
        <section>
          <SectionTitle id="qualities">Was mich als Leader auszeichnet</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {qualities.map((q) => (
              <Card key={q.title} className="bg-card/60 border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-5">
                  <q.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1 font-sans">{q.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{q.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* RP IMPROVEMENTS */}
        <section>
          <SectionTitle id="rp-improvements">Vorschläge zur Verbesserung des Roleplays</SectionTitle>
          <div className="space-y-4">
            {rpImprovements.map((item, i) => (
              <Card key={i} className="bg-card/60 border-border/50">
                <CardContent className="flex items-start gap-5 p-5">
                  <span className="text-2xl font-bold text-primary/30 font-sans mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 font-sans">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* DEPARTMENTS */}
        <section>
          <SectionTitle id="departments">Abteilungskonzept</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-4">
            {departments.map((dept) => (
              <Card key={dept.name} className="bg-card/60 border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <dept.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 font-sans">{dept.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{dept.tasks}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* RANKS */}
        <section>
          <SectionTitle id="ranks">Rangkonzept</SectionTitle>
          <div className="space-y-6">
            {rankTiers.map((tier) => (
              <div key={tier.label}>
                <Badge className={`${tier.color} mb-3`}>{tier.label}</Badge>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                  {ranks.slice(tier.range[0], tier.range[1]).map((r) => (
                    <div key={r.number} className="bg-card/40 border border-border/30 rounded-md px-3 py-2 text-center">
                      <span className="text-xs text-primary font-mono">{r.number}</span>
                      <p className="text-xs text-muted-foreground mt-0.5">{r.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Card className="bg-card/60 border-border/50 mt-6">
            <CardContent className="p-5 space-y-2 text-sm">
              {[
                ["Beförderungskriterien", "[Kriterien hier eintragen]"],
                ["Aktivitätsanforderung", "[Anforderung hier eintragen]"],
                ["Interne Bewertungen", "[Bewertungssystem hier beschreiben]"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-border/30 pb-2">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* CLOSING */}
        <section>
          <SectionTitle id="closing">Schlusswort</SectionTitle>
          <Card className="bg-card/60 border-border/50 border-l-4 border-l-primary">
            <CardContent className="p-6 md:p-8">
              <p className="text-foreground leading-relaxed italic">
                [Hier kommt euer abschließender Text hin – Zusammenfassung eurer Vision, Dank an die Leser, und warum ihr der richtige Kandidat für die Leitung des FIB seid.]
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="bg-border/30" />

        {/* FOOTER */}
        <footer className="text-center text-sm text-muted-foreground pb-8">
          <p>FIB Leader Bewerbung · Alle Angaben sind Platzhalter</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
