import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import {
  Shield, Target, Users, Award, BookOpen,
  Star, Crosshair, Scale, Eye, Briefcase, GraduationCap, ChevronDown
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
  { title: "Verantwortung ist für mich das Fundament von Führung", desc: " Ich sehe meine Rolle nicht als Privileg, sondern als Aufgabe, der ich mich ganz bewusst stelle. Die Herausforderungen, die ich damit auf mich nehme, nehme ich ernst  und gehe sie mit Ruhe und klarem Kopf an.", icon: Users },
  { title: "Geduld und Diplomatie liegen mir", desc: "Gerade wenn es kompliziert wird, bleibe ich ruhig und überlegt. Mir ist wichtig, auch in schwierigen Situationen ruhig zu entscheiden um das Vertrauen aller Mitglieder zu behalten.", icon: Scale },
  { title: "Für mich steht das Team im Mittelpunkt", desc: "Ein guter Leader ist für sein Team da, kümmert sich um die Anliegen der Mitglieder und sorgt dafür, dass sich jeder gehört und wertgeschätzt fühlt. Das nehme ich sehr ernst und tuhe alles was in meiner Macht Steht dafür.", icon: Users },
  { title: "Ich bringe Einsatz und Weitblick mit", desc: "Ich will nicht nur führen, sondern gemeinsam mit allen die Organisation voranbringen. Mit voller Energie arbeite ich daran, unsere Ziele zu erreichen und unsere Vision Wirklichkeit werden zu lassen. ", icon: Eye },
  { title: "Ich bringe jede Menge Erfahrung in Organisation und Verwaltung mit", desc: " Da ich in vielen Organisationen war, kenne ich mich perfekt mit den State-/Crime-Regeln aus. Ich war auch Admin und die Leaderregeln. kenne ich perfekt. Und da ich das alles schon durchlebt habe, kenne ich die Handhabung mit schwierigen Strukturen. ", icon: Scale },
];

const rpImprovements = [
  { title: "Event Aktivität", desc: "Wir fahren aktiv alle Events an. Die Aktivität wird belohnt." },
  { title: "Wantedjagt", desc: "Es wird es alle zwei Wochen ein UC Event geben bei dem alle mit der UC Prüfung ausschließlich Wanteds und beweise sammeln. Mit einer Belohnung für die Aktivsten." },
  { title: "Verhalten", desc: "Freundlichkeit steht an erster Stelle. Das Verhalten ist extrem wichtig. Jedes Fehlverhalten, das zu weit geht oder jemanden verletzt/belästigt, wird strikt geahndet. ." },
  { title: "Organisationsübergreifende zusammenarbeit", desc: "Wir möchten aktiv organisationsübergreifend zusammenarbeiten mit jeglichen Orgas, um das Role-Play für alle zu fördern und die geltenden Rechte strikt durchzusetzen." },
  { title: "Beiweissammlung", desc: "Beweise werden aktiv gesammelt, um das Gesetz strikt zu vollstrecken. Beweise werden auch gesammelt, u. a. um Gangs und illegale Strukturen zu Zerschlagen ." },
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
  { label: "Sonstiges (1–6)", range: [0, 6] },
  { label: "Agent (7–12)", range: [6, 12] },
  { label: "Command (13–16)", range: [12, 16] },
  { label: "Highcommand (17–23)", range: [16, 23] },
  { label: "Abteilungsleiter / Curator / Personalverwaltung (24–27)", range: [23, 27] },
  { label: "Leaderschaft (28–30)", range: [27, 30] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const SectionTitle = ({ children, id, number }: { children: React.ReactNode; id: string; number: string }) => (
  <motion.div
    id={id}
    className="scroll-mt-24 mb-10 mt-0 first:mt-0"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-baseline gap-3 mb-2">
      <motion.span
        className="text-sm font-mono text-muted-foreground"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        {number}.
      </motion.span>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{children}</h2>
    </div>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      style={{ originX: 0 }}
    >
      <Separator className="bg-foreground/20" />
    </motion.div>
  </motion.div>
);

const ExpandableDept = ({ dept }: { dept: typeof departments[0] }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      className="border border-border/40 rounded-sm overflow-hidden cursor-pointer group"
      onClick={() => setExpanded(!expanded)}
      whileHover={{ scale: 1.01, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-4 p-4">
        <motion.img
          src={dept.img}
          alt={dept.name}
          className="w-14 h-14 object-contain shrink-0 rounded"
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.4 }}
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-foreground">{dept.name}</h3>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </div>
      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-4 pb-4 pt-0">
          <Separator className="bg-border/30 mb-3" />
          <p className="text-sm text-muted-foreground leading-relaxed">{dept.tasks}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AnimatedBackground = () => {
  const logoPositions = [
    { top: "8%", left: "10%", size: 180, delay: 0 },
    { top: "25%", right: "5%", size: 220, delay: 1.5 },
    { top: "50%", left: "3%", size: 160, delay: 3 },
    { top: "70%", right: "8%", size: 200, delay: 0.8 },
    { top: "90%", left: "15%", size: 140, delay: 2.2 },
    { top: "40%", left: "50%", size: 300, delay: 0.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 bg-background" />

      {/* Sweeping blue light beam */}
      <motion.div
        className="absolute"
        style={{
          width: "200%",
          height: "200%",
          top: "-50%",
          left: "-50%",
          background: `conic-gradient(from 0deg, transparent 0deg, hsl(215 100% 55% / 0.07) 15deg, transparent 30deg, transparent 180deg, hsl(215 100% 55% / 0.05) 195deg, transparent 210deg)`,
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating logo watermarks */}
      {logoPositions.map((pos, i) => (
        <motion.img
          key={i}
          src={tdImg}
          alt=""
          className="absolute select-none"
          style={{
            top: pos.top,
            left: pos.left,
            right: (pos as any).right,
            width: pos.size,
            height: pos.size,
            objectFit: "contain",
            opacity: 0.04,
            filter: "brightness(2) saturate(0.5)",
          }}
          animate={{
            y: [0, -20, 0, 15, 0],
            rotate: [0, 3, -3, 2, 0],
            scale: [1, 1.05, 0.97, 1.03, 1],
            opacity: [0.03, 0.06, 0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: pos.delay,
          }}
        />
      ))}

      {/* Pulsing blue glow - center */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          left: "50%",
          top: "30%",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, hsl(215 100% 50% / 0.12), transparent 70%)`,
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Flashing blue lights - left */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          left: "5%",
          top: "15%",
          background: `radial-gradient(circle, hsl(220 100% 60% / 0.2), transparent 70%)`,
        }}
        animate={{ opacity: [0, 1, 0, 0.7, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Flashing blue lights - right */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 250,
          height: 250,
          right: "8%",
          top: "20%",
          background: `radial-gradient(circle, hsl(210 100% 65% / 0.18), transparent 70%)`,
        }}
        animate={{ opacity: [0, 0.8, 0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Ambient moving glow bottom */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 800,
          height: 400,
          bottom: "-10%",
          left: "20%",
          background: `radial-gradient(ellipse, hsl(215 90% 50% / 0.08), transparent 70%)`,
        }}
        animate={{ x: [0, 100, -50, 0], opacity: [0.5, 0.8, 0.4, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Scan lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, hsl(215 100% 60%) 0px, transparent 1px, transparent 3px)`,
          backgroundSize: "100% 3px",
        }}
      />
    </div>
  );
};

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{ scaleX: scrollYProgress, background: "linear-gradient(90deg, hsl(215 100% 50%), hsl(210 100% 70%))", boxShadow: "0 0 12px hsl(215 100% 55% / 0.8), 0 0 30px hsl(215 100% 55% / 0.4)" }}
    />
  );
};

const Index = () => {
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.95]);

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <ProgressBar />

      {/* DOCUMENT HEADER */}
      <header className="border-b-2 border-foreground/20 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-20 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ opacity: headerOpacity }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          >
            <motion.img
              src={tdImg}
              alt="FIB Seal"
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          <motion.p
            className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4 font-mono"
            initial={{ opacity: 0, letterSpacing: "0.8em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Federal Investigation Bureau · Vertraulich
          </motion.p>

          <motion.h1
            className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Bewerbung als Leader des FIB
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Separator className="max-w-xs mx-auto bg-foreground/30 my-6" />
          </motion.div>

          <motion.p
            className="text-sm text-muted-foreground tracking-wide uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Struktur · Führung · Professionelles Roleplay
          </motion.p>

          <motion.p
            className="text-xs text-muted-foreground/60 mt-4 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Dokument-Nr. FIB-LB-2026 · Klassifizierung: Intern
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            className="mt-8"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 mx-auto text-muted-foreground/40" />
          </motion.div>
        </motion.div>
      </header>

      {/* DOCUMENT BODY */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16 space-y-20 relative z-10">

        {/* TABLE OF CONTENTS */}
        <motion.section
          id="agenda"
          className="scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="mb-8">
            <h2 className="text-lg font-bold text-foreground tracking-tight uppercase mb-3">Inhaltsverzeichnis</h2>
            <Separator className="bg-foreground/20" />
          </div>
          <div className="space-y-0">
            {sections.map((s, i) => (
              <motion.a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-3 py-2 border-b border-border/50 hover:bg-muted/50 px-2 -mx-2 transition-colors group"
                variants={fadeUp}
                whileHover={{ x: 6, backgroundColor: "hsl(40 10% 90% / 0.5)" }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-sm font-mono text-muted-foreground w-8">{String(i + 1).padStart(2, "0")}</span>
                <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring" }}>
                  <s.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </motion.div>
                <span className="text-sm text-foreground">{s.label}</span>
                <span className="flex-1 border-b border-dotted border-muted-foreground/30 mx-2 mb-1" />
                <span className="text-xs text-muted-foreground font-mono">§{i + 1}</span>
              </motion.a>
            ))}
          </div>
        </motion.section>

       {/* IC & OOC */}
<motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
  <SectionTitle id="ic-ooc" number="01">IC & OOC Informationen</SectionTitle>
  <div className="grid md:grid-cols-2 gap-8">
    
    <motion.div variants={slideInLeft}>
      <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4 border-b border-foreground/10 pb-2">
        IC – In Character
      </h3>
      <table className="w-full text-sm">
        <tbody>
          {[["Name", "Paul Blaq"], ["Visum", "60"], ["ID:", "168494"]].map(([label, value]) => (
            <motion.tr key={label} className="border-b border-border/30" whileHover={{ backgroundColor: "hsl(40 10% 92% / 0.5)" }}>
              <td className="py-2 text-muted-foreground pr-4 w-1/3">{label}</td>
              <td className="py-2 text-foreground font-medium">{value}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      
     
<div className="mt-4">
  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-bold">Werdegang</p>
  

  <div className="grid grid-cols-1 gap-0 text-sm text-foreground leading-relaxed">
    
    <div>
      <p className="font-semibold mb-2">Staatliche:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>LSPD: Rang 13, Sophia Hagedorn</li>
        <li>FIB: Rang 16, Maximilian Bianchi</li>
        <li>USSS: Rang 16, Nico Schlumpf</li>
        <li>NG: Rang 23, Marc Bianchi</li>
        <li>SAHP: Rang 25, Luka Einker</li>
      </ul>
    </div>

    <div>
      <p className="font-semibold mb-2">Kriminelle:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Ballas: Rang 10, Ella Next</li>
        <li>Bloods: Rang 12, Paul Blaq</li>
        <li>Mara: Rang 11, Yasin Korkmaz</li>
        <li>Vagos: Rang 9, Shirin Coco</li>
        <li>Grove: Rang 11, Noah Raiin </li>
        <li>Blackout: Leader</li>
      </ul>
    </div>
  </div>
</div>
    </motion.div>

    <motion.div variants={fadeUp}>
      <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4 border-b border-foreground/10 pb-2">
        OOC – Out of Character
      </h3>
      <table className="w-full text-sm">
        <tbody>
          {[["Alter", "18 Jahre"], ["Name", "Paul"], ["Discord Name", "loudenbous"]].map(([label, value]) => (
            <motion.tr key={label} className="border-b border-border/30" whileHover={{ backgroundColor: "hsl(40 10% 92% / 0.5)" }}>
              <td className="py-2 text-muted-foreground pr-4 w-1/3">{label}</td>
              <td className="py-2 text-foreground font-medium">{value}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>

  </div>
</motion.section>

        {/* MOTIVATION */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <SectionTitle id="motivation" number="02">Warum ich Leader werden möchte</SectionTitle>
          <p className="text-sm text-foreground leading-relaxed mb-6">
            
          </p>
          <motion.ul className="space-y-3 pl-4" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {["Sehr geehrte Administrative, in meiner bisherigen Laufbahn innerhalb diverser Organisationen, sowohl aufseiten der Gangs als auch in staatlichen Organisationen, konnte ich wertvolle Erfahrungen im Bereich Führung, Taktik und Teamkoordination sammeln. Ich habe mehrfach unter Beweis gestellt, dass ich Verantwortung übernehmen und strategisch handeln kann. Durch das Leiten einer eigenen Organisation wie auch durch die Erfahrung als Administrator habe ich viel Erfahrung gesammelt. Nun sehe ich mich bereit, eine staatliche Organisation zu leiten. Die Rolle als Leader sehe ich nicht nur als Chance, meine Fähigkeiten weiter auszubauen, sondern auch als Verantwortung, das Rollenspiel aktiv und kreativ mitzugestalten. Ich bin mir der verbundenen Erwartungen und Herausforderungen voll bewusst und bin überzeugt, der Richtige für diese herausfordernde Führungsposition zu sein."].map((p, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-sm"
                variants={slideInLeft}
                whileHover={{ x: 4 }}
              >
                <span className="text-muted-foreground font-mono text-xs mt-0.5">{String.fromCharCode(97 + i)})</span>
                <span className="text-foreground">{p}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* QUALITIES */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <SectionTitle id="qualities" number="03">Was mich als Leader auszeichnet</SectionTitle>
          <div className="space-y-4">
            {qualities.map((q, i) => (
              <motion.div
                key={q.title}
                variants={fadeUp}
                className="flex items-start gap-4 py-3 border-b border-border/30 cursor-default"
                whileHover={{ x: 6, backgroundColor: "hsl(40 10% 93% / 0.5)" }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-8 h-8 rounded border border-border flex items-center justify-center text-muted-foreground shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2, rotate: 10, borderColor: "hsl(0 0% 10%)" }}
                  transition={{ type: "spring" }}
                >
                  <q.icon className="w-4 h-4" />
                </motion.div>
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{String(i + 1).padStart(2, "0")}. {q.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{q.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* RP IMPROVEMENTS */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <SectionTitle id="rp-improvements" number="04">Vorschläge zur Verbesserung des Roleplays</SectionTitle>
          <div className="space-y-4">
            {rpImprovements.map((item, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="flex items-start gap-4 py-3 border-b border-border/30"
                whileHover={{ scale: 1.01, x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  className="text-lg font-bold text-muted-foreground/40 font-mono w-8 shrink-0 text-right"
                  whileHover={{ color: "hsl(0 0% 10%)", scale: 1.1 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* DEPARTMENTS */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <SectionTitle id="departments" number="05">Abteilungskonzept</SectionTitle>
          <div className="space-y-3">
            {departments.map((dept) => (
              <ExpandableDept key={dept.name} dept={dept} />
            ))}
          </div>
        </motion.section>

        {/* RANKS */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <SectionTitle id="ranks" number="06">Rangkonzept</SectionTitle>
          <div className="space-y-6">
            {rankTiers.map((tier) => (
              <motion.div key={tier.label} variants={fadeUp}>
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 border-b border-border/30 pb-1">
                  {tier.label}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1">
                  {ranks.slice(tier.range[0], tier.range[1]).map((r) => (
                    <motion.div
                      key={r.number}
                      className="border border-border/40 px-2 py-2 text-center cursor-default"
                      whileHover={{ scale: 1.05, borderColor: "hsl(0 0% 30%)", zIndex: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span className="text-[10px] text-muted-foreground font-mono font-bold">{r.number}</span>
                      <p className="text-[11px] text-foreground mt-0.5 leading-tight">{r.name}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className="mt-8">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Beförderungskriterien", "Aktivität,Abteilungsarbeit"],
                ].map(([label, value]) => (
                  <motion.tr key={label} className="border-b border-border/30" whileHover={{ backgroundColor: "hsl(40 10% 92% / 0.5)" }}>
                    <td className="py-2 text-muted-foreground pr-4">{label}</td>
                    <td className="py-2 text-foreground">{value}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.section>

        {/* CLOSING */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <SectionTitle id="closing" number="07">Schlusswort</SectionTitle>
          <motion.div
            className="border-l-2 border-foreground/20 pl-6 py-2"
            whileHover={{ borderColor: "hsl(0 0% 10%)", paddingLeft: "2rem" }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm text-foreground leading-relaxed italic">
              Abschließend möchte ich mich herzlich dafür bedanken, dass ihr euch die Zeit genommen habt, meine Bewerbung zu lesen. Ich hoffe, ich konnte mit meinen Ideen und meiner Motivation überzeugen.
            </p>
          </motion.div>
        </motion.section>

        {/* DOCUMENT FOOTER */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ originX: 0.5 }}
        >
          <Separator className="bg-foreground/20 mt-16" />
        </motion.div>
        <footer className="text-center py-8 space-y-2">
          <p className="text-xs text-muted-foreground font-mono tracking-wider uppercase">
            Federal Investigation Bureau · Bewerbungsdokument
          </p>
          <p className="text-[10px] text-muted-foreground/50 font-mono">
                          Dokument-Nr. FIB-LB-2026
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
