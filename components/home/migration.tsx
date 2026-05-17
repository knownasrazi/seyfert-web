import { codeToHtml } from "shiki";
import { cn } from "@/lib/utils";

type Pattern = {
  title: string;
  subtitle: string;
  virgin: { lang: "typescript"; code: string };
  chad: { lang: "typescript"; code: string; file: string };
};

const patterns: Pattern[] = [
  {
    title: "Listening to Events",
    subtitle: "Wire-everything-by-hand vs file-per-event auto-load.",
    virgin: {
      lang: "typescript",
      code: `// somewhere in your god-file
client.once('ready', (c) => {
  console.log(\`\${c.user.tag} is up\`);
});

client.on('guildDelete', (g) => {
  cache.evict(g.id);
});`,
    },
    chad: {
      lang: "typescript",
      file: "src/events/botReady.ts",
      code: `import { createEvent } from 'seyfert';

export default createEvent({
  data: { once: true, name: 'botReady' },
  run(user, client) {
    client.logger.info(\`\${user.username} is up\`);
  },
});`,
    },
  },
  {
    title: "Autocomplete on Options",
    subtitle: "Hand-rolled interaction switch vs typed option helper.",
    virgin: {
      lang: "typescript",
      code: `client.on('interactionCreate', async (i) => {
  if (!i.isAutocomplete()) return;
  if (i.commandName !== 'pick') return;

  const focus = i.options.getFocused();
  const all = ['bugs', 'actions', 'random'];

  await i.respond(
    all
      .filter((c) => c.includes(focus))
      .map((c) => ({ name: c, value: c })),
  );
});`,
    },
    chad: {
      lang: "typescript",
      file: "src/commands/pick.ts",
      code: `import { createStringOption } from 'seyfert';

const options = {
  query: createStringOption({
    description: 'pick one',
    autocomplete(i) {
      const all = ['bugs', 'actions', 'random'];
      const focus = i.getInput();
      return i.respond(
        all
          .filter((c) => c.includes(focus))
          .map((c) => ({ name: c, value: c })),
      );
    },
  }),
};`,
    },
  },
  {
    title: "Pre-Command Middleware",
    subtitle: "Manual guard at the top of every handler vs declarative pipeline.",
    virgin: {
      lang: "typescript",
      code: `client.on('interactionCreate', async (i) => {
  if (!i.isChatInputCommand()) return;

  // copy-pasted into every command handler
  console.log(
    \`\${i.user.username} ran /\${i.commandName}\`,
  );

  // your actual command logic...
});`,
    },
    chad: {
      lang: "typescript",
      file: "src/middlewares/logger.ts",
      code: `import { createMiddleware } from 'seyfert';

export const logger = createMiddleware<void>((m) => {
  const { author, resolver } = m.context;
  console.log(
    \`\${author.username} ran /\${resolver.fullCommandName}\`,
  );
  m.next();
});

// then in command: @Middlewares(['logger'])`,
    },
  },
];

async function highlight(code: string) {
  return codeToHtml(code, {
    lang: "typescript",
    theme: "github-dark-default",
  });
}

export async function Migration() {
  const rendered = await Promise.all(
    patterns.map(async (p) => ({
      ...p,
      virginHtml: await highlight(p.virgin.code),
      chadHtml: await highlight(p.chad.code),
    })),
  );

  return (
    <section className="flex flex-col gap-10 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 border border-white/15 bg-white/5">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-zinc-300 font-mono">
            // The Migration
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black leading-[1.0] tracking-tight uppercase">
          From{" "}
          <span className="text-zinc-600 line-through decoration-2">Cope</span>{" "}
          to{" "}
          <span
            className="italic"
            style={{
              background:
                "linear-gradient(180deg, #ffffff 0%, #d4a857 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            W.
          </span>
        </h2>
        <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
          Three patterns. Same outcome. Spot how the second column shrinks.
        </p>
      </div>

      {/* Patterns */}
      <div className="flex flex-col gap-6">
        {rendered.map((p, i) => (
          <PatternBlock
            key={p.title}
            index={i}
            title={p.title}
            subtitle={p.subtitle}
            virginHtml={p.virginHtml}
            chadHtml={p.chadHtml}
            chadFile={p.chad.file}
          />
        ))}
      </div>

      {/* Bottom strip */}
      <div className="border-y border-white/15 bg-white/[0.02] py-4 -mx-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[10px] uppercase tracking-[0.3em] font-mono text-zinc-500">
          <span>
            <span className="text-white font-bold">TIME TO MIGRATE:</span>{" "}
            <span>~1 afternoon</span>
          </span>
          <span className="text-white/30">★</span>
          <span>
            <span className="text-white font-bold">DELETED FILES:</span>{" "}
            <span>many</span>
          </span>
          <span className="text-white/30">★</span>
          <span>
            <span className="text-white font-bold">REGRETS:</span>{" "}
            <span>none</span>
          </span>
        </div>
      </div>
    </section>
  );
}

function PatternBlock({
  index,
  title,
  subtitle,
  virginHtml,
  chadHtml,
  chadFile,
}: {
  index: number;
  title: string;
  subtitle: string;
  virginHtml: string;
  chadHtml: string;
  chadFile: string;
}) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <div className="border-2 border-white/15 bg-[#0a0a0a]">
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
        <div className="flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-zinc-600">
            // Pattern {num}
          </span>
          <span className="text-sm md:text-base font-black uppercase tracking-tight text-white">
            {title}
          </span>
        </div>
        <span className="hidden sm:block text-xs text-zinc-500 italic max-w-md text-right">
          {subtitle}
        </span>
      </div>

      {/* Code grid */}
      <div className="grid md:grid-cols-2 gap-[2px] bg-white/10">
        <CodeColumn
          virgin
          label="Virgin that-library.js"
          file=""
          html={virginHtml}
        />
        <CodeColumn
          virgin={false}
          label="Chad seyfert"
          file={chadFile}
          html={chadHtml}
        />
      </div>
    </div>
  );
}

function CodeColumn({
  virgin,
  label,
  file,
  html,
}: {
  virgin: boolean;
  label: string;
  file: string;
  html: string;
}) {
  return (
    <div className="flex flex-col bg-[#0a0a0a]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
        <span
          className={cn(
            "text-[10px] uppercase tracking-[0.25em] font-mono font-bold",
            virgin ? "text-red-500/80" : "text-emerald-400",
          )}
        >
          {virgin ? "😬" : "💪"} {label}
        </span>
        {file && (
          <span className="text-[10px] font-mono text-zinc-600 tracking-wider">
            {file}
          </span>
        )}
      </div>
      <div
        className={cn(
          "text-[12px] font-mono leading-[1.7] overflow-x-auto p-4 flex-1 bg-[#0d1117]",
          "[&_pre]:!bg-transparent [&_pre]:!p-0 [&_code]:!bg-transparent",
          virgin && "saturate-[0.6] opacity-90",
        )}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
