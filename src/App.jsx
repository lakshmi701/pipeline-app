import { useState } from "react";

const phases = [
  {
    id: 1,
    label: "PHASE 1",
    title: "Foundation & First Contacts",
    subtitle: "Days 1–30",
    color: "#1a472a",
    accent: "#52b788",
    bg: "#0a1f0f",
    weeks: [
      {
        week: 1,
        highlight: true,
        highlightReason: "🔥 HIGHEST LEVERAGE: This week sets your entire pipeline. The WhatsApp broadcast to local shopkeepers is zero-cost, instant reach, and positions you before competitors. Every future sale traces back to Day 1 contacts.",
        outreach: {
          channel: "WhatsApp Broadcast",
          type: "Direct Message",
          action: "Create a WhatsApp broadcast list of 50 local shop owners (kirana, medical, gift shops). Send: \"Namaste! I supply plain non-woven bags — 5gsm to 80gsm — direct from unit. Bulk orders, same-day dispatch. Can I send you our size & price chart?\" Attach a clean photo of your bag range."
        },
        content: {
          asset: "Price & Size Chart (PDF/Image)",
          action: "Design a one-page visual showing bag sizes (small/medium/large/jumbo), GSM options, and MOQ (minimum order quantity). Add your phone number and UPI ID. Share it on WhatsApp Status and save it as your standard reply attachment."
        },
        followUp: {
          move: "Reply within 2 hours to every response. Send samples to the 3 most interested. Log all contacts in a WhatsApp label called 'Warm Leads W1'."
        }
      },
      {
        week: 2,
        highlight: false,
        outreach: {
          channel: "Physical Visit + Cold Call",
          type: "In-Person Drop-Off",
          action: "Visit 10 local hospitals / clinics / diagnostic centers. Ask for the purchase manager or admin. Hand over a sample bag + a laminated card: \"Plain non-woven bags for OPD dispensing, pharmacy, or laundry use. Custom sizes available. Call us for a quote.\""
        },
        content: {
          asset: "Google Business Profile Post",
          action: "Post a photo of your production unit or a stack of bags with caption: \"Fresh batch ready — plain non-woven carry bags for shops & hospitals. Bulk pricing available. DM or call [your number].\" Use keywords: non woven bags manufacturer, wholesale bags [your city]."
        },
        followUp: {
          move: "Call back every hospital contact from Week 1 visit. Ask: \"Did you get a chance to check the sample? Do you need a different size?\" Offer a free 50-piece trial order."
        }
      },
      {
        week: 3,
        highlight: false,
        outreach: {
          channel: "IndiaMart / TradeIndia Listing",
          type: "B2B Marketplace Message",
          action: "Create a free seller profile on IndiaMart. List: Plain Non-Woven Carry Bags. Upload 5 product photos (different sizes/GSM). In the description write: 'Direct manufacturer. MOQ 500 pcs. GSM 30–80. Immediate dispatch. Pan-India delivery available.' Respond to every buyer inquiry within 1 hour."
        },
        content: {
          asset: "WhatsApp Status Video (30 sec)",
          action: "Film a simple video: hands showing different bag sizes, then the price list. Voice-over: 'Plain non-woven bags, factory direct pricing. Call us today.' Post on WhatsApp Status and share in 3 local business WhatsApp groups."
        },
        followUp: {
          move: "Send a polite nudge to all Week 1 warm leads who did not order: \"Just checking if you needed a sample or smaller trial batch. We have stock ready this week.\""
        }
      },
      {
        week: 4,
        highlight: false,
        outreach: {
          channel: "Local Business WhatsApp Groups",
          type: "Group Post + Referral Ask",
          action: "Join 5 local trader/shopkeeper WhatsApp groups. Post once: 'We manufacture plain non-woven bags — supplying to shops, hospitals, pharmacies in [city]. Direct from factory. Anyone need bulk bags at wholesale price?' Then ask your 2 first buyers: 'Can you refer us to 2 other shop owners? We'll give you 50 free bags as thanks.'"
        },
        content: {
          asset: "Testimonial Card (Image)",
          action: "Take a photo of your first customer's shop with their permission. Create an image: shop photo + text overlay: 'Supplying to [Shop Name], [City] — Plain non-woven bags, factory direct.' Share it on your WhatsApp Status."
        },
        followUp: {
          move: "Call every hospital contact from Week 2. If they tried the sample, ask for a purchase order. Offer net-7 payment terms for their first formal order to remove hesitation."
        }
      }
    ]
  },
  {
    id: 2,
    label: "PHASE 2",
    title: "Pipeline Acceleration",
    subtitle: "Days 31–60",
    color: "#1a1a4e",
    accent: "#7b8cde",
    bg: "#0d0d2b",
    weeks: [
      {
        week: 5,
        highlight: true,
        highlightReason: "🔥 HIGHEST LEVERAGE: Supermarkets & retail chains buy in large volumes and reorder monthly. One supermarket account = 3–5× the revenue of a single kirana shop. This week's outreach unlocks your biggest recurring revenue channel.",
        outreach: {
          channel: "Cold Visit — Supermarkets & Retail Chains",
          type: "In-Person Meeting Request",
          action: "Visit 5 supermarkets or local retail chains. Ask for the store manager or owner. Say: 'We supply plain non-woven carry bags — we manufacture locally, so you get faster delivery and better pricing than distributors. Can I show you our range and give you a sample?' Leave a printed rate card."
        },
        content: {
          asset: "Rate Card (Printed + Digital PDF)",
          action: "Create a professional 1-page rate card: GSM options, size chart, per-piece price at 500 / 1000 / 5000 / 10,000 quantity. Add your bank/UPI details, GST number, and delivery timeline. Email it + WhatsApp it to every warm contact."
        },
        followUp: {
          move: "Follow up with all IndiaMart inquiries from Week 3. Send: 'We have fresh stock ready. Can I send you a sample courier? No charges.' Getting a physical sample into their hands converts 3× better than messages alone."
        }
      },
      {
        week: 6,
        highlight: false,
        outreach: {
          channel: "Phone Call — Wholesale Distributors",
          type: "Cold Call Script",
          action: "Find 10 packaging distributors in nearby districts using IndiaMart or JustDial. Call each: 'We manufacture plain non-woven bags and are looking for distribution partners in [district]. We offer competitive margins and fast restocking. Can I share our product & pricing details?' Aim for 3 callbacks."
        },
        content: {
          asset: "Facebook Page Post + Local Group Share",
          action: "Post on your Facebook business page: A photo of a packed order ready for dispatch. Caption: 'Order dispatched to [City] — 2000 pcs plain non-woven bags. Taking bulk orders for next batch. Call or WhatsApp [number].' Share this post in 3 local business Facebook groups."
        },
        followUp: {
          move: "Call all supermarket contacts from Week 5. Ask: 'Did you check the sample? Would a trial order of 1000 bags work for you this week?' Offer to deliver personally for first order."
        }
      },
      {
        week: 7,
        highlight: false,
        outreach: {
          channel: "Email Outreach — Hospitals & Nursing Homes",
          type: "Cold Email (Bulk B2B)",
          action: "Find 20 hospitals/nursing homes via Google Maps in a 50km radius. Get admin email from their website or Google listing. Send: Subject: 'Plain Non-Woven Bags for Hospital Use — Direct Manufacturer Pricing'. Body: 'We supply plain non-woven bags suitable for OPD, pharmacy, and linen use. Direct manufacturer pricing. GST invoice provided. Can we schedule a quick call or send you a sample?' Attach your rate card."
        },
        content: {
          asset: "Production Process Short Video (60 sec)",
          action: "Film a 60-second walk-through of your manufacturing: raw material → cutting → finished bags. Add simple text overlays: 'In-house manufacturing. Quality control. Same-day dispatch.' Post on WhatsApp Status + Facebook Page."
        },
        followUp: {
          move: "Message all Week 4 referral contacts. If any haven't ordered, send: 'We're running a July batch — locking in orders this week for priority dispatch. Want to block your quantity now?'"
        }
      },
      {
        week: 8,
        highlight: false,
        outreach: {
          channel: "Local Trade Exhibition / Market Visit",
          type: "In-Person Networking",
          action: "Attend any local trade event, weekly wholesale market (mandi), or MSME expo in your district. Carry 20 sample bags and 30 printed rate cards. Approach every stall selling consumer goods. Script: 'We make the bags your products go into. Can I show you?' Collect at least 15 business cards or phone numbers."
        },
        content: {
          asset: "Google Review Request Campaign",
          action: "Ask your first 5–8 customers to leave a Google review for your business. Send them the direct Google review link via WhatsApp: 'It would really help our small business if you could leave us a quick Google review — here's the direct link: [link].' 5 reviews = significant trust boost for inbound inquiries."
        },
        followUp: {
          move: "Call all distributor contacts from Week 6. Ask if they received your details. If yes, offer to visit their warehouse for a demo and to discuss margin structure."
        }
      }
    ]
  },
  {
    id: 3,
    label: "PHASE 3",
    title: "Convert, Close & Compound",
    subtitle: "Days 61–90",
    color: "#4a1a1a",
    accent: "#e07a5f",
    bg: "#1f0a0a",
    weeks: [
      {
        week: 9,
        highlight: false,
        outreach: {
          channel: "WhatsApp Re-engagement Broadcast",
          type: "Offer Message",
          action: "Send to your entire contact list (all warm leads from Phase 1 & 2): 'We're closing our current production batch this Friday. If you've been thinking about placing an order, this week is the best time — stock is ready for immediate dispatch. Want me to confirm your quantity?' This creates urgency without being pushy."
        },
        content: {
          asset: "Before/After Order Photo Post",
          action: "Post a split photo: empty production floor (before) vs. packed bags stacked for dispatch (after). Caption: 'From raw material to delivery in 48 hours. Current batch almost full — taking orders for next cycle.' Share on WhatsApp Status + Facebook."
        },
        followUp: {
          move: "Call every hospital that received a sample but hasn't ordered. Say: 'Just wanted to check — did the sample work for your use? We're adding a few more hospital accounts this month and wanted to confirm if you'd like to be included.'"
        }
      },
      {
        week: 10,
        highlight: true,
        highlightReason: "🔥 HIGHEST LEVERAGE: Bulk close week. By now you have 8–10 weeks of warm pipeline. Offering a 5% prepayment discount triggers decisions from fence-sitters and converts 60-day leads into actual revenue THIS week — directly accelerating your break-even timeline.",
        outreach: {
          channel: "Phone Call — Bulk Close Push",
          type: "Direct Sales Call",
          action: "Call every warm lead who has seen samples or inquired but not ordered. Script: 'I wanted to offer you something — for orders placed and paid this week, I'll give you a 5% discount on your first bulk order. We have stock ready. Would 1000 or 2000 pieces work for you to start?' Log every response."
        },
        content: {
          asset: "Order Milestone Post",
          action: "Post: 'We've dispatched [X] orders in our first 60 days — plain non-woven bags to shops, hospitals, and retailers across [state/region]. Grateful for the trust. Now scaling up. DM for wholesale pricing.' This signals credibility and momentum."
        },
        followUp: {
          move: "Send thank-you messages to all existing customers. Include: 'Would you be ready to place your next order? We'll prioritize your dispatch and hold your preferred size/GSM in our next batch.'"
        }
      },
      {
        week: 11,
        highlight: false,
        outreach: {
          channel: "IndiaMart / TradeIndia — Paid Upgrade or Boosted Listing",
          type: "Platform Lead Generation",
          action: "If your free listing has generated inquiries, invest in a basic paid boost (₹2,000–₹5,000/month) on IndiaMart for the keyword 'plain non-woven bags'. Respond to ALL inquiries with a voice note — it converts much better than text. Script: 'Thank you for your inquiry. We manufacture these bags in-house. Can I send you our rate card and a sample courier?'"
        },
        content: {
          asset: "FAQ Post — Common Buyer Questions",
          action: "Create a WhatsApp Status or Facebook post: '5 questions buyers always ask us: 1. MOQ? 500 pcs. 2. GSM range? 30–80. 3. Delivery time? 24–48 hrs local. 4. GST invoice? Yes. 5. Custom size? Yes, 1000+ pcs. Call us: [number].' This pre-handles objections for cold prospects."
        },
        followUp: {
          move: "Contact all Week 8 trade show / mandi contacts who haven't followed up. Send: 'We met at [event] — I'm following up on the bag samples. Have you had a chance to check pricing? I can arrange delivery this week.'"
        }
      },
      {
        week: 12,
        highlight: false,
        outreach: {
          channel: "Referral Program Launch",
          type: "WhatsApp Message to Existing Customers",
          action: "Message every customer who has ordered at least once: 'We're launching a referral bonus — refer us to any shop, hospital, or business that places an order, and we'll give you 100 FREE bags on your next order. No limit on referrals.' This converts happy buyers into your sales team at zero cost."
        },
        content: {
          asset: "90-Day Business Review Post",
          action: "Post a simple text graphic: '90 Days In — [X] orders dispatched. [X] cities served. [X] businesses supplied. Building one bag at a time. Thank you for your support.' Tag any customers who agreed. This builds social proof and signals you're a real, growing business."
        },
        followUp: {
          move: "Call your top 5 customers (by order size). Ask: 'What quantity do you need for next month? I want to keep your stock pre-planned so you never face delays.' Lock in recurring monthly orders verbally — then send a WhatsApp confirmation."
        }
      }
    ]
  }
];

const HighlightBadge = () => (
  <span style={{
    background: "linear-gradient(135deg, #ff6b35, #f7931e)",
    color: "#fff",
    fontSize: "10px",
    fontWeight: "800",
    letterSpacing: "1.5px",
    padding: "3px 10px",
    borderRadius: "20px",
    textTransform: "uppercase",
    boxShadow: "0 2px 8px rgba(255,107,53,0.5)"
  }}>⚡ HIGH LEVERAGE</span>
);

const WeekCard = ({ week, phaseAccent, phaseBg, phaseColor }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      background: week.highlight
        ? `linear-gradient(135deg, ${phaseColor}55 0%, ${phaseBg} 100%)`
        : `${phaseBg}cc`,
      border: week.highlight
        ? `2px solid ${phaseAccent}`
        : `1px solid ${phaseAccent}33`,
      borderRadius: "14px",
      marginBottom: "16px",
      overflow: "hidden",
      boxShadow: week.highlight ? `0 4px 24px ${phaseAccent}33` : "none",
      transition: "all 0.3s ease"
    }}>
      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 20px",
          cursor: "pointer",
          userSelect: "none"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div style={{
            width: "42px", height: "42px",
            background: `linear-gradient(135deg, ${phaseAccent}44, ${phaseAccent}22)`,
            border: `2px solid ${phaseAccent}66`,
            borderRadius: "10px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: "900", fontSize: "15px", color: phaseAccent,
            fontFamily: "'Courier New', monospace",
            flexShrink: 0
          }}>
            W{week.week}
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <span style={{ fontWeight: "700", fontSize: "15px", color: "#f0ede8", fontFamily: "'Georgia', serif" }}>
                Week {week.week}
              </span>
              {week.highlight && <HighlightBadge />}
            </div>
            <div style={{ fontSize: "12px", color: phaseAccent + "bb", marginTop: "2px", fontFamily: "'Courier New', monospace", letterSpacing: "0.5px" }}>
              {week.outreach.channel}
            </div>
          </div>
        </div>
        <div style={{
          color: phaseAccent,
          fontSize: "20px",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease"
        }}>▾</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div style={{ padding: "0 20px 20px" }}>
          {week.highlight && (
            <div style={{
              background: `linear-gradient(135deg, #ff6b3522, #f7931e11)`,
              border: "1px solid #ff6b3555",
              borderRadius: "10px",
              padding: "12px 16px",
              marginBottom: "16px",
              fontSize: "13px",
              color: "#ffcba4",
              lineHeight: "1.6",
              fontStyle: "italic"
            }}>
              {week.highlightReason}
            </div>
          )}

          {[
            {
              icon: "📡",
              label: "OUTREACH ACTION",
              sub: `${week.outreach.channel} · ${week.outreach.type}`,
              body: week.outreach.action,
              borderColor: phaseAccent
            },
            {
              icon: "📄",
              label: "CONTENT ASSET",
              sub: week.content.asset,
              body: week.content.action,
              borderColor: "#a8dadc"
            },
            {
              icon: "🔄",
              label: "FOLLOW-UP MOVE",
              sub: "Warm Leads",
              body: week.followUp.move,
              borderColor: "#f4a261"
            }
          ].map((block, i) => (
            <div key={i} style={{
              background: "#ffffff08",
              borderLeft: `3px solid ${block.borderColor}`,
              borderRadius: "0 10px 10px 0",
              padding: "14px 16px",
              marginBottom: "12px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                <span style={{ fontSize: "14px" }}>{block.icon}</span>
                <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.5px", color: block.borderColor, fontFamily: "'Courier New', monospace" }}>{block.label}</span>
              </div>
              <div style={{ fontSize: "11px", color: "#aaa", marginBottom: "8px", fontStyle: "italic" }}>{block.sub}</div>
              <div style={{ fontSize: "13.5px", color: "#e8e4de", lineHeight: "1.7" }}>{block.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function PipelinePlan() {
  const [activePhase, setActivePhase] = useState(0);
  const phase = phases[activePhase];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080808",
      fontFamily: "'Georgia', serif",
      color: "#f0ede8",
      position: "relative",
      overflowX: "hidden"
    }}>
      {/* Grain overlay */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundSize: "128px 128px"
      }} />

      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "32px 20px 80px", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #52b78822, #7b8cde22)",
            border: "1px solid #52b78844",
            borderRadius: "30px",
            padding: "6px 18px",
            fontSize: "11px",
            letterSpacing: "2px",
            color: "#52b788",
            marginBottom: "16px",
            fontFamily: "'Courier New', monospace",
            textTransform: "uppercase"
          }}>
            Non-Woven Bag Manufacturing Business
          </div>
          <h1 style={{
            fontSize: "clamp(28px, 6vw, 48px)",
            fontWeight: "900",
            margin: "0 0 8px",
            lineHeight: "1.1",
            letterSpacing: "-1px",
            background: "linear-gradient(135deg, #f0ede8 0%, #a8a09a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            The 90-Day Pipeline Plan
          </h1>
          <p style={{ color: "#888", fontSize: "15px", margin: "0", fontStyle: "italic" }}>
            Break even · Recover 50% initial investment · Week-by-week execution
          </p>

          {/* Revenue goal banner */}
          <div style={{
            display: "flex", gap: "12px", justifyContent: "center",
            flexWrap: "wrap", marginTop: "24px"
          }}>
            {[
              { label: "Target", value: "Break Even", icon: "🎯" },
              { label: "Investment Recovery", value: "50% in 90 Days", icon: "💰" },
              { label: "High-Leverage Weeks", value: "W1 · W5 · W10", icon: "⚡" }
            ].map((stat, i) => (
              <div key={i} style={{
                background: "#ffffff08",
                border: "1px solid #ffffff15",
                borderRadius: "12px",
                padding: "12px 18px",
                textAlign: "center"
              }}>
                <div style={{ fontSize: "18px" }}>{stat.icon}</div>
                <div style={{ fontSize: "11px", color: "#666", letterSpacing: "1px", textTransform: "uppercase", fontFamily: "'Courier New', monospace" }}>{stat.label}</div>
                <div style={{ fontSize: "14px", fontWeight: "700", color: "#f0ede8", marginTop: "2px" }}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase Tabs */}
        <div style={{
          display: "flex", gap: "8px", marginBottom: "28px",
          background: "#ffffff08", borderRadius: "14px", padding: "6px"
        }}>
          {phases.map((p, i) => (
            <button
              key={i}
              onClick={() => setActivePhase(i)}
              style={{
                flex: 1,
                padding: "12px 8px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                background: activePhase === i
                  ? `linear-gradient(135deg, ${p.color}, ${p.accent}44)`
                  : "transparent",
                color: activePhase === i ? p.accent : "#666",
                fontWeight: activePhase === i ? "800" : "500",
                fontSize: "clamp(10px, 2.5vw, 13px)",
                fontFamily: "'Courier New', monospace",
                letterSpacing: "0.5px",
                transition: "all 0.3s ease",
                border: activePhase === i ? `1px solid ${p.accent}44` : "1px solid transparent"
              }}
            >
              <div>{p.label}</div>
              <div style={{ fontSize: "9px", opacity: 0.7, marginTop: "2px" }}>{p.subtitle}</div>
            </button>
          ))}
        </div>

        {/* Phase Header */}
        <div style={{
          background: `linear-gradient(135deg, ${phase.color}88, ${phase.bg})`,
          border: `1px solid ${phase.accent}44`,
          borderRadius: "16px",
          padding: "20px 24px",
          marginBottom: "24px",
          display: "flex",
          alignItems: "center",
          gap: "16px"
        }}>
          <div style={{
            width: "50px", height: "50px",
            background: `linear-gradient(135deg, ${phase.accent}44, ${phase.accent}22)`,
            borderRadius: "12px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "22px", flexShrink: 0
          }}>
            {["🌱", "🚀", "💎"][activePhase]}
          </div>
          <div>
            <div style={{ fontSize: "11px", color: phase.accent, letterSpacing: "2px", fontFamily: "'Courier New', monospace", textTransform: "uppercase" }}>
              {phase.label} · {phase.subtitle}
            </div>
            <div style={{ fontSize: "20px", fontWeight: "800", color: "#f0ede8", marginTop: "2px" }}>
              {phase.title}
            </div>
          </div>
        </div>

        {/* Week Cards */}
        {phase.weeks.map((week) => (
          <WeekCard
            key={week.week}
            week={week}
            phaseAccent={phase.accent}
            phaseBg={phase.bg}
            phaseColor={phase.color}
          />
        ))}

        {/* Legend */}
        <div style={{
          background: "#ffffff06",
          border: "1px solid #ffffff10",
          borderRadius: "14px",
          padding: "20px",
          marginTop: "32px"
        }}>
          <div style={{ fontSize: "11px", color: "#666", letterSpacing: "2px", fontFamily: "'Courier New', monospace", marginBottom: "14px" }}>HOW TO READ THIS PLAN</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
            {[
              { icon: "📡", label: "Outreach Action", desc: "The exact channel + what to say" },
              { icon: "📄", label: "Content Asset", desc: "What to create and publish" },
              { icon: "🔄", label: "Follow-Up Move", desc: "Action on existing warm leads" },
              { icon: "⚡", label: "High Leverage", desc: "Weeks with outsized ROI" }
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "16px", flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: "12px", fontWeight: "700", color: "#ddd" }}>{item.label}</div>
                  <div style={{ fontSize: "11px", color: "#666", marginTop: "2px" }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "28px", fontSize: "12px", color: "#444", fontStyle: "italic" }}>
          Tap each week card to expand the full action plan · All actions executable solo, no team meeting required
        </div>
      </div>
    </div>
  );
}
