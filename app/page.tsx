"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Coffee,
  Heart,
  Menu,
  Pause,
  Play,
  Plus,
  ShoppingBag,
  Sprout,
  Wallet,
  X,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flower, LittleCat, WhaleCat } from "@/components/MibudgeMascots";
import "./landing.css";

const rupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
const features = [
  {
    title: "Jajan kecil juga punya tempat.",
    description:
      "Kopi, skincare, sampai ongkos pulang. Catat pengeluaran sesuai kategorinya, biar kamu tahu ke mana uangmu pergi.",
    label: "Pengeluaran",
    note: "Semua tercatat, tanpa menghakimi.",
    heading: "Catatan hari ini",
    rows: [
      {
        icon: Coffee,
        name: "Matcha sore",
        category: "Jajan",
        amount: "Rp28.000",
      },
      {
        icon: ShoppingBag,
        name: "Sunscreen kesayangan",
        category: "Skincare",
        amount: "Rp89.000",
      },
      {
        icon: Heart,
        name: "Makan bareng teman",
        category: "Hiburan",
        amount: "Rp65.000",
      },
    ],
    totalLabel: "Total hari ini",
    total: "Rp182.000",
  },
  {
    title: "Yang penting, nggak kelupaan.",
    description:
      "Pisahkan kebutuhan dari keinginan. Pantau barang yang masih ada dan yang sudah habis, supaya belanja berikutnya lebih terarah.",
    label: "Kebutuhan",
    note: "Belanja yang perlu, di waktu yang pas.",
    heading: "Daftar kebutuhanku",
    rows: [
      {
        icon: ShoppingBag,
        name: "Sabun muka",
        category: "Perawatan diri",
        amount: "Masih ada",
      },
      {
        icon: Coffee,
        name: "Kopi di rumah",
        category: "Dapur",
        amount: "Perlu isi ulang",
      },
      {
        icon: Heart,
        name: "Vitamin harian",
        category: "Kesehatan",
        amount: "Masih ada",
      },
    ],
    totalLabel: "Saatnya belanja",
    total: "1 kebutuhan",
  },
  {
    title: "Mimpi kecil, dicicil pelan-pelan.",
    description:
      "Bikin wishlist, tentukan target, lalu catat tabunganmu. Lihat setiap langkah kecil membawamu makin dekat ke hal yang kamu inginkan.",
    label: "Wishlist & tabungan",
    note: "Nggak harus banyak. Yang penting mulai.",
    heading: "Pelan-pelan, kesampaian",
    rows: [
      {
        icon: ShoppingBag,
        name: "Tas untuk kerja",
        category: "Rp450.000 dari Rp750.000",
        amount: "60%",
      },
      {
        icon: Sprout,
        name: "Liburan singkat",
        category: "Rp600.000 dari Rp2.000.000",
        amount: "30%",
      },
      {
        icon: Heart,
        name: "Dana jaga-jaga",
        category: "Rp500.000 dari Rp1.000.000",
        amount: "50%",
      },
    ],
    totalLabel: "Sudah disisihkan",
    total: "Rp1.550.000",
  },
];
const questions = [
  [
    "Mibudge bisa bantu apa saja?",
    "Mibudge membantu mencatat pengeluaran, mengelola kebutuhan, membuat wishlist, dan memantau tabungan. Catatan skincare dan makeup juga punya tempat sendiri, jadi lebih mudah dipantau.",
  ],
  [
    "Harus jago mengatur uang dulu?",
    "Nggak perlu. Mulai saja dari satu pengeluaran hari ini. Kamu bisa menambahkan kebutuhan dan target tabungan saat sudah siap.",
  ],
  [
    "Apakah Mibudge terhubung ke rekening bank?",
    "Tidak. Kamu memasukkan catatan pengeluaran dan tabungan secara manual. Mibudge tidak memindahkan uang atau melakukan transaksi di rekeningmu.",
  ],
  [
    "Bagaimana cara mulai mencatat?",
    "Buat akun, masuk ke dashboard, lalu tambahkan catatan pertamamu. Kamu bisa mengelompokkan pengeluaran dan membuat target sesuai kebutuhan.",
  ],
];

export default function Landing() {
  const { status } = useSession();
  const router = useRouter();
  const root = useRef<HTMLDivElement>(null);
  const demo = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [feature, setFeature] = useState(0);
  const [income, setIncome] = useState(5000000);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  const sceneAnimation = useRef<gsap.core.Timeline | null>(null);
  const selected = features[feature];

  useEffect(() => {
    if (status === "authenticated") router.replace("/dashboard");
  }, [router, status]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        const ctx = gsap.context(() => {
          gsap
            .timeline({ defaults: { ease: "power3.out", duration: 0.8 } })
            .from(".mb-hero-copy > *", { y: 22, opacity: 0, stagger: 0.09 })
            .from(
              ".mb-scene",
              { y: 32, rotation: -3, opacity: 0, duration: 1 },
              0.2,
            );
          const ambient = gsap.timeline({
            repeat: -1,
            yoyo: true,
            defaults: { ease: "sine.inOut", duration: 3.2 },
          });
          ambient
            .to(
              ".mb-hero-mascot .mascot-float",
              { y: -9, rotation: -1, transformOrigin: "50% 70%" },
              0,
            )
            .to(
              ".mb-hero-mascot .whale-tail",
              { rotation: 5, transformOrigin: "5% 80%" },
              0,
            );
          sceneAnimation.current = ambient;
          const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !document.hidden && !pausedRef.current)
              ambient.play();
            else ambient.pause();
          });
          const hero = root.current?.querySelector(".mb-hero");
          if (hero) observer.observe(hero);
          const visibility = () => {
            if (document.hidden) ambient.pause();
            else if (
              !pausedRef.current &&
              hero &&
              hero.getBoundingClientRect().bottom > 0
            )
              ambient.play();
          };
          document.addEventListener("visibilitychange", visibility);
          gsap.from(".mb-notebook", {
            rotation: -3,
            y: 24,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".mb-features",
              start: "top 70%",
              once: true,
            },
          });
          return () => {
            observer.disconnect();
            document.removeEventListener("visibilitychange", visibility);
          };
        }, root);
        return () => {
          ctx.revert();
          sceneAnimation.current = null;
        };
      },
      root,
    );
    return () => media.revert();
  }, []);

  useEffect(() => {
    pausedRef.current = paused;
    sceneAnimation.current?.paused(paused);
  }, [paused]);
  useEffect(() => {
    if (
      !demo.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        demo.current,
        { y: 8, opacity: 0.4 },
        { y: 0, opacity: 1, duration: 0.25, ease: "power2.out" },
      );
    });
    return () => ctx.revert();
  }, [feature]);

  function tabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % features.length;
    else if (event.key === "ArrowLeft")
      next = (index + features.length - 1) % features.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = features.length - 1;
    else return;
    event.preventDefault();
    setFeature(next);
    document.getElementById(`feature-tab-${next}`)?.focus();
  }

  return (
    <div ref={root} className="mibudge" id="top">
      <a href="#main-content" className="mb-skip">
        Lewati navigasi
      </a>
      <header className="mb-header">
        <div className="mb-container mb-nav">
          <Link href="/" className="mb-brand" aria-label="Mibudge, beranda">
            <span className="mb-brand-icon">
              <WhaleCat cat={false} />
            </span>
            Mibudge<span className="mb-brand-dot">.</span>
          </Link>
          <nav className="mb-desktop-nav" aria-label="Navigasi utama">
            <a href="#fitur">Kenalan dulu</a>
            <a href="#simulasi">Coba budgeting</a>
            <a href="#pertanyaan">Tanya jawab</a>
          </nav>
          <div className="mb-nav-actions">
            <Link className="mb-login" href="/login">
              Masuk <ArrowUpRight size={16} />
            </Link>
            <button
              className="mb-menu-toggle"
              aria-label={menuOpen ? "Tutup navigasi" : "Buka navigasi"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="mb-mobile-nav"
            aria-label="Navigasi seluler"
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setMenuOpen(false);
                root.current
                  ?.querySelector<HTMLButtonElement>(".mb-menu-toggle")
                  ?.focus();
              }
            }}
          >
            <a href="#fitur" onClick={() => setMenuOpen(false)}>
              Kenalan dulu
            </a>
            <a href="#simulasi" onClick={() => setMenuOpen(false)}>
              Coba budgeting
            </a>
            <a href="#pertanyaan" onClick={() => setMenuOpen(false)}>
              Tanya jawab
            </a>
          </nav>
        )}
      </header>

      <main id="main-content">
        <section className="mb-hero mb-container" aria-labelledby="hero-title">
          <div className="mb-hero-copy">
            <div className="mb-hello">
              <span className="mb-mini-spark">✳</span> Teman baik untuk uangmu
            </div>
            <h1 id="hero-title">
              Boleh jajan.
              <br />
              Tetap punya
              <br />
              <span className="mb-underlined">
                simpanan.
                <svg
                  viewBox="0 0 480 20"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M5 13Q240 -2 475 9M40 18Q240 5 440 17" />
                </svg>
              </span>
            </h1>
            <p>
              Hidup bukan cuma soal menahan diri.
              <br className="mb-desktop-break" /> Catat pengeluaran, sisihkan
              untuk mimpi, dan nikmati hari ini dengan lebih tenang.
            </p>
            <div className="mb-hero-actions">
              <Link href="/register" className="mb-button">
                Mulai perjalananmu <ArrowUpRight size={19} />
              </Link>
              <a href="#fitur" className="mb-text-link">
                Kenalan dulu <ArrowDown size={16} />
              </a>
            </div>
            <div className="mb-hero-footnote">
              <span>
                <Check size={14} /> Mulai dari satu catatan
              </span>
              <span>
                <Heart size={13} /> Tanpa menghakimi
              </span>
            </div>
          </div>
          <div className="mb-scene">
            <div className="mb-scene-orbit" aria-hidden="true" />
            <div className="mb-hand-note mb-scene-note">
              sedikit dicatat,
              <br />
              banyak tenangnya{" "}
              <svg viewBox="0 0 80 60" aria-hidden="true">
                <path d="M6 5Q70 0 65 46M52 36L65 48L76 34" />
              </svg>
            </div>
            <div className="mb-budget-paper">
              <div className="mb-paper-tape" aria-hidden="true" />
              <div className="mb-paper-heading">
                <span>Ruang uangku</span>
                <Flower />
              </div>
              <p>Untuk hari ini & nanti</p>
              <div className="mb-paper-amount">
                Rp5.000.000<span>Contoh anggaran bulanan</span>
              </div>
              <div
                className="mb-stacked-bar"
                aria-label="50 persen kebutuhan, 30 persen keinginan, 20 persen tabungan"
              >
                <i />
                <i />
                <i />
              </div>
              <div className="mb-paper-row">
                <span>
                  <i className="mb-dot mb-dot-sage" /> Kebutuhan
                </span>
                <b>50%</b>
              </div>
              <div className="mb-paper-row">
                <span>
                  <i className="mb-dot mb-dot-peach" /> Keinginan
                </span>
                <b>30%</b>
              </div>
              <div className="mb-paper-row">
                <span>
                  <i className="mb-dot mb-dot-rose" /> Tabungan
                </span>
                <b>20%</b>
              </div>
              <div className="mb-paper-bottom">
                <Check size={14} /> Ada ruang buat hal yang kamu suka.
              </div>
            </div>
            <div className="mb-mini-receipt">
              <Heart size={20} />
              <span>
                Wishlist pertamaku<b>Pelan-pelan, kebeli.</b>
              </span>
              <span className="mb-receipt-star">✧</span>
            </div>
            <Flower className="mb-scene-flower" />
            <span className="mb-scene-spark" aria-hidden="true">
              ✧
            </span>
            <WhaleCat className="mb-hero-mascot" />
            <div className="mb-scene-caption">teman kecil, mimpi besar.</div>
            <button
              className="mb-motion-toggle"
              aria-label={
                paused ? "Putar animasi maskot" : "Jeda animasi maskot"
              }
              aria-pressed={paused}
              onClick={() => setPaused(!paused)}
            >
              {paused ? <Play size={14} /> : <Pause size={14} />}
            </button>
          </div>
        </section>

        <div
          className="mb-ribbon"
          aria-label="Untuk hal-hal yang berarti buatmu"
        >
          <div className="mb-container">
            <span>Kopi hari ini</span>
            <Flower />
            <span>Skincare favorit</span>
            <Flower />
            <span>Liburan nanti</span>
            <Flower />
            <span>Masa depanmu</span>
            <Flower />
          </div>
        </div>

        <section
          id="fitur"
          className="mb-features mb-container"
          aria-labelledby="features-title"
        >
          <div className="mb-section-top">
            <p className="mb-section-label">
              <span /> Satu tempat, banyak rencana
            </p>
            <h2 id="features-title">
              Untuk hidupmu
              <br />
              yang banyak maunya.
            </h2>
            <p>
              Yang perlu dibeli. Yang ingin dimiliki.
              <br />
              Semuanya boleh punya ruang sendiri.
            </p>
          </div>
          <div className="mb-feature-layout">
            <div className="mb-feature-copy">
              <div
                className="mb-tabs"
                role="tablist"
                aria-label="Jelajahi fitur Mibudge"
              >
                {features.map((item, index) => (
                  <button
                    key={item.label}
                    id={`feature-tab-${index}`}
                    role="tab"
                    aria-selected={feature === index}
                    aria-controls="feature-panel"
                    tabIndex={feature === index ? 0 : -1}
                    onClick={() => setFeature(index)}
                    onKeyDown={(event) => tabKey(event, index)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="mb-feature-description">
                <h3>{selected.title}</h3>
                <p>{selected.description}</p>
                <Link href="/register" className="mb-text-link">
                  Bikin catatan pertamamu <ArrowUpRight size={18} />
                </Link>
              </div>
              <div className="mb-feature-note">
                <LittleCat />
                <span className="mb-hand-note">{selected.note}</span>
              </div>
            </div>
            <div
              className="mb-notebook"
              role="tabpanel"
              id="feature-panel"
              aria-labelledby={`feature-tab-${feature}`}
              tabIndex={0}
            >
              <div className="mb-notebook-rings" aria-hidden="true">
                {Array.from({ length: 7 }, (_, i) => (
                  <i key={i} />
                ))}
              </div>
              <div ref={demo} className="mb-demo-content">
                <div className="mb-demo-heading">
                  <div>
                    <span>Contoh catatan</span>
                    <h4>{selected.heading}</h4>
                  </div>
                  <span className="mb-demo-stamp">
                    <Sprout size={22} />
                  </span>
                </div>
                <div className="mb-demo-rows">
                  {selected.rows.map((row, index) => (
                    <div className="mb-demo-row" key={row.name}>
                      <span className={`mb-demo-icon mb-demo-icon-${index}`}>
                        <row.icon size={20} strokeWidth={1.6} />
                      </span>
                      <div>
                        <b>{row.name}</b>
                        <small>{row.category}</small>
                      </div>
                      <strong>{row.amount}</strong>
                    </div>
                  ))}
                </div>
                <div className="mb-demo-total">
                  <span>{selected.totalLabel}</span>
                  <b>{selected.total}</b>
                </div>
                <p className="mb-demo-caption">
                  Catatan kecil hari ini, lebih paham diri sendiri.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="simulasi"
          className="mb-simulation"
          aria-labelledby="simulation-title"
        >
          <div className="mb-container mb-simulation-grid">
            <div className="mb-simulation-copy">
              <span className="mb-section-label">
                <span /> Coba dulu, yuk
              </span>
              <h2 id="simulation-title">
                Uangmu punya
                <br />
                banyak tujuan.
              </h2>
              <p>
                Coba bagi anggaran bulananmu. Ada untuk kebutuhan, untuk
                senang-senang, dan untuk diri kamu di masa depan.
              </p>
              <Flower className="mb-simulation-flower" />
              <p className="mb-hand-note">
                Sedikit untuk nanti,
                <br />
                berarti banget suatu hari.
              </p>
            </div>
            <div className="mb-calculator">
              <div className="mb-calculator-label">
                <label htmlFor="monthly-budget">Anggaran bulananmu</label>
                <Wallet size={21} />
              </div>
              <output htmlFor="monthly-budget" className="mb-income">
                {rupiah(income)}
              </output>
              <input
                id="monthly-budget"
                type="range"
                min="1000000"
                max="15000000"
                step="500000"
                value={income}
                onChange={(event) => setIncome(Number(event.target.value))}
                aria-valuetext={rupiah(income)}
                style={
                  {
                    "--range-progress": `${(income - 1000000) / 140000}%`,
                  } as CSSProperties
                }
              />
              <div className="mb-range-labels">
                <span>Rp1 juta</span>
                <span>Rp15 juta</span>
              </div>
              <div
                className="mb-allocation"
                aria-live="polite"
                aria-atomic="true"
              >
                <div>
                  <span>
                    <i className="mb-dot mb-dot-sage" /> Kebutuhan{" "}
                    <small>50%</small>
                  </span>
                  <b>{rupiah(income * 0.5)}</b>
                </div>
                <div>
                  <span>
                    <i className="mb-dot mb-dot-peach" /> Keinginan{" "}
                    <small>30%</small>
                  </span>
                  <b>{rupiah(income * 0.3)}</b>
                </div>
                <div>
                  <span>
                    <i className="mb-dot mb-dot-rose" /> Tabungan{" "}
                    <small>20%</small>
                  </span>
                  <b>{rupiah(income * 0.2)}</b>
                </div>
              </div>
              <p className="mb-calculator-note">
                Contoh pembagian 50/30/20, bukan aturan wajib.
                <br />
                Sesuaikan dengan kebutuhan dan keadaanmu.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-how mb-container" aria-labelledby="how-title">
          <div className="mb-how-heading">
            <h2 id="how-title">
              Nggak harus langsung jago.
              <br />
              Mulai aja dulu.
            </h2>
            <span className="mb-hand-note">
              Satu langkah kecil juga kemajuan ♡
            </span>
          </div>
          <ol className="mb-steps">
            <li>
              <span className="mb-step-number">1</span>
              <h3>Kenalan, yuk.</h3>
              <p>
                Buat akunmu. Siapkan ruang kecil untuk semua rencana besarmu.
              </p>
            </li>
            <li>
              <span className="mb-step-number">2</span>
              <h3>Catat yang hari ini.</h3>
              <p>
                Mulai dari kopi pagi atau belanja bulanan. Satu catatan juga
                berarti.
              </p>
            </li>
            <li>
              <span className="mb-step-number">3</span>
              <h3>Pelan-pelan, jadi kebiasaan.</h3>
              <p>
                Lihat pengeluaranmu, atur kebutuhan, dan sisihkan untuk
                wishlist.
              </p>
            </li>
          </ol>
        </section>

        <section
          id="pertanyaan"
          className="mb-faq mb-container"
          aria-labelledby="faq-title"
        >
          <div>
            <span className="mb-section-label">
              <span /> Masih penasaran?
            </span>
            <h2 id="faq-title">
              Kenalan
              <br />
              lebih dekat.
            </h2>
            <LittleCat className="mb-faq-cat" />
          </div>
          <div className="mb-faq-list">
            {questions.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <Plus size={19} />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-closing">
          <div className="mb-container mb-closing-inner">
            <div>
              <span className="mb-hand-note">
                Untuk kamu, dan semua rencanamu.
              </span>
              <h2>
                Yuk, bikin uangmu
                <br />
                lebih terarah.
              </h2>
              <Link href="/register" className="mb-button">
                Mulai bareng Mibudge <ArrowUpRight size={19} />
              </Link>
            </div>
            <div className="mb-closing-art">
              <Flower />
              <WhaleCat />
              <span className="mb-hand-note">kita mulai bareng, ya?</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="mb-footer mb-container">
        <div>
          <Link href="/" className="mb-brand">
            Mibudge.
          </Link>
          <p>Catatan kecil. Langkah baik.</p>
        </div>
        <div className="mb-footer-right">
          <a href="#top">
            Kembali ke atas <ArrowUpRight size={15} />
          </a>
          <span>Dibuat dengan hati, untuk hari-harimu.</span>
        </div>
      </footer>
    </div>
  );
}
