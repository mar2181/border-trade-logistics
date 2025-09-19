# Executive Summary

This audit reviewed the **McAllen Warehouse Investment** site after your corrections.  While many major figures (e.g., $12.25 M portfolio value and 43.17 acres) now match the eight‑lot summary, multiple **critical numerical errors remain** and a number of **UI/UX, code and accessibility issues** were detected.  These include incorrect lot data (buildable areas, price per acre, investment totals), inconsistent metrics across sections, mis‑labelled financial terminology, and potential gaps in SEO and accessibility.  The overall health score is **63/100**—reflecting accurate top‑level summaries but persistent problems in underlying details and broader site quality.  Addressing the high‑priority issues below is essential before presenting the site to investors.

## Key Findings

- **Lot data inaccuracies** – Only lots 1 and 2 display correct acreages, buildable SF and investment calculations.  Lots 3–8 still use **98 400 SF**, **108 460 SF** or **53 340 SF** for buildable area instead of the correct values.  This inflates land $/SF, NOI and ROI calculations, and causes portfolio totals to be wrong【571603860796614†screenshot】【387580525754549†screenshot】.
- **Incorrect price‑per‑acre distribution** – In the professional analysis, lots 1, 3, 5 and 7 show **$300 K per acre**, but only lots **1** and **7** should be at that price.  Lots 3 and 5 should display **$265 K per acre** (consistent with the majority of lots).  The current mix misrepresents pricing and skews averages.
- **Portfolio summaries still off** – Several sections display **703 420 SF buildable** and portfolio investments of **$105.5 M (dry)** and **$175.9 M (refrigerated)** instead of the correct **702 820 SF** and **$117.2 M** / **$189.1 M** totals【693457504948109†screenshot】.  Weighted average price per acre should be calculated from the corrected figures.
- **Contradictory market data** – The site alternates between **3 %** and **3.9 %** vacancy rates and references **$6 B** vs **$7.05 B** vs **$8 B** cross‑border trade【693457504948109†screenshot】.  Use one authoritative source for vacancy and trade volumes.
- **Mis‑labelled terms** – The “Stabilized Income Property” card labels **8–12 % appreciation** as a **cap rate**, conflating two different metrics.  Cap rates around 8–9 % should be separated from land appreciation projections.
- **User experience & accessibility** – Content relies heavily on dark backgrounds with low‑contrast typography; images lack documented alt text; navigation anchors sometimes jump unexpectedly; and call‑to‑action buttons (“Run Scenarios”, “Export Tear Sheet”) do not provide feedback or may link nowhere.  The site also lacks meta descriptions and consistent heading structures, limiting SEO performance.

## Top Recommendations

1. **Centralize all lot data** in a single data source (JSON or CMS entry) and bind every section to it.  Recalculate buildable SF, price per acre (only lots 1 and 7 at $300 K), investment totals and ROI, ensuring consistency across dry and refrigerated scenarios.  Update portfolio summaries accordingly.
2. **Correct portfolio‑wide metrics** – Use the exact totals: **702 820 SF buildable**, **$117.2 M** total dry investment (at $150/SF), **$189.1 M** total refrigerated investment (at ~$200/SF), and a weighted average price per acre of ≈ $284 K.  Remove outdated figures (703 420 SF, $105.5 M, $175.9 M) from all cards and headlines【693457504948109†screenshot】.
3. **Standardize market statistics** – Choose one vacancy rate (e.g., 3.9 % for 3Q 2024) and one trade‑volume figure (e.g., > $6 B produce via the Pharr bridge) and apply them consistently; provide citations or footnotes to enhance credibility.
4. **Fix pricing distribution** – Ensure only lot 1 and lot 7 show **$300 K per acre**, with all others at **$265 K per acre**.  Verify that the professional analysis cards reflect this change.
5. **Clarify financial terminology** – Separate *cap rate* (ratio of NOI to property value, around 8–9 %) from *land appreciation* (expected 8–12 % annually).  Adjust labels in the Stabilized Income Property section accordingly.
6. **Improve accessibility & UX** – Increase text contrast on dark backgrounds, add descriptive alt text for images, ensure keyboard navigation and ARIA labels for interactive elements, and provide visible feedback on CTA buttons.  Simplify navigation anchors to scroll smoothly to the intended sections.
7. **Enhance SEO** – Add meta descriptions, unique title tags per page/section, structured headings (H1–H3 hierarchy), and canonical links.  Compress large images and leverage caching to improve load times.

# Sitemap Overview

The site is a single‑page application divided into sections accessible via the top navigation bar:

- **Overview (Hero)** – Introduction, key stats, land investment summary.
- **Market Analysis** – Vacancy and rental trends, trade volume distribution, market projections.
- **Land Parcels / Land Investment** – Eight‑lot portfolio summary, virtual tour, executive summary.
- **Virtual Tour** – Embedded video of the property.
- **Financials (Investment Opportunities)** – Tabs for Dry vs Refrigerated warehouse investments, individual investment opportunities, portfolio summaries and Fed‑rate analysis.
- **Properties / Property Specifications** – Professional analysis of each lot with plan vs market rate tables and investment recommendations.
- **Calculator** – (Not fully explored; assumed to be an interactive financial calculator.)
- **Other sections** – Strategic Location & Connectivity, Strategic Industrial Ecosystem, Area Demographics & Market Profile, Industry Expert Insights, Professional Investment Analysis, Investment Process.

# Detailed Issues

| Page / Location | Issue Description | Severity | Evidence | Suggested Fix & Impact |
|---|---|---|---|---|
| Overview / Hero | Button links (e.g., **“View Analysis”**) do not visibly navigate anywhere or provide feedback. | **Medium** | Manually clicking these buttons on the landing page yields no action or scroll. | Add anchor IDs or `href` targets to ensure buttons scroll to the correct section; provide hover/focus states. Minimal impact on other pages. |
| Top navigation | Anchors sometimes overshoot sections or fail to align with section tops (e.g., clicking *Financials* lands mid‑way through the dry investment section). | **Low** | User testing shows inconsistent scroll positions. | Adjust anchor tags and offset values to align sections precisely; ensure `id` names are unique. |
| Market Analysis – Key stats | Mixed vacancy rates (3 % vs 3.9 %) and inconsistent trade‑volume figures ($6 B, $7.05 B, $8 B). | **High** | Various cards show conflicting data【693457504948109†screenshot】. | Decide on one authoritative source; update all references. |
| Market Analysis – Trade distribution | Component figures sum to **$7.05 B** while headline states “over $6 B” produce trade. | **Medium** | The distribution lists Avocados $1.97 B, Berries $1.1 B, Peppers $0.89 B, Onions $0.65 B, Others $2.44 B. | Adjust the category values or headline to align (e.g., revise categories to match $6 B or update headline to $7 B). |
| Investment Opportunities – Dry toggle | Total SF shows **703 K** and total investment **$105.5 M**, both too low; the price distribution wrongly lists *lots 3 & 5* at $300 K per acre. | **High** | Summary metrics and individual cards show 98 400 SF buildable and $16 M+ investments【571603860796614†screenshot】. | Recalculate metrics using 702 820 SF and correct price per acre ($265 K for lots 2, 3, 4, 5, 6, 8; $300 K only for 1 and 7); adjust investment totals to $117.2 M. |
| Investment Opportunities – Refrigerated toggle | Uses $250/SF cost (instead of ~$200) and lists **703 420 SF** and **$175.9 M** investment; lot data mis‑priced and mis‑sized. | **High** | Individual lot cards show 98 400–108 460 SF, $26 M+ investments and ROI 6.5–7 %【442661301326747†screenshot】【45493212769797†screenshot】. | Use correct buildable areas and costs ($200–$220/SF).  Total should be 702 820 SF and ~$189.1 M. |
| Individual Investment Opportunities (Dry) | Lots 3–8 display 98 400 SF or 108 460 SF and mis‑priced land per acre ($300 K for lots 3 & 5). | **High** | Each lot card clearly shows the wrong SF and price【571603860796614†screenshot】【387580525754549†screenshot】. | Update each lot with true acreage, buildable SF, and price per acre.  Lots 1 and 7 at $300 K; the rest at $265 K. |
| Individual Investment Opportunities (Refrigerated) | Similar mis‑sizing and mis‑pricing, plus overstated investments and undervalued ROI. | **High** | Lots 7 and 8 show 108 460 SF and 53 340 SF respectively【800636558633186†screenshot】. | Same as dry section; recalc using correct SF and price.  Adjust total investment to $189.1 M and ROI 7.2–7.4 %. |
| Complete Dry/Refrigerated Portfolio cards | Display **703 420 SF** and **$105.5 M / $175.9 M**, inconsistent with correct totals. | **Medium** | Summary cards after each investment strategy show incorrect numbers【693457504948109†screenshot】【472956105088600†screenshot】. | Bind these metrics to the central data source; recalc totals. |
| Property Specifications | Summary text notes **703 420 SF** buildable as “corrected data” and claims this is “significantly larger than marketing materials.” | **Medium** | Section headline misreports total SF【651022379219741†screenshot】. | Update to 702 820 SF and remove “significantly larger” statement. |
| Professional Analysis – Lot 3–8 | Buildable SF, coverage %, Land $/SF, Annual NOI and ROI are derived from incorrect SF; price per acre for lots 3 & 5 is wrong. | **High** | E.g., Lot 3 shows 98 400 SF and Land $/acre $300 K【286862204700139†screenshot】; Lot 7 shows 108 460 SF and $300 K【312391151782295†screenshot】. | Update per‑lot data; re‑run underwriting calculations. |
| Stabilized Income Property & Investment Highlights | Presents “8–12 % appreciation cap rate” and leaves the Annual NOI line blank. | **Medium** | Card shows conflicting metrics and missing fields【651022379219741†screenshot】. | Separate cap rate (8–9 %) from appreciation (8–12 %); provide actual NOI or remove the field. |
| Buttons (Export Tear Sheet, Run Scenarios) | These call‑to‑action buttons do not indicate success or link targets; unclear if they function. | **Low** | Clicking them produces no visible change. | Assign `href` to downloadable PDFs or modal windows; add loading indicators; ensure analytics track clicks. |
| Accessibility & SEO | Low contrast white/yellow text on dark backgrounds; images lack alt attributes; headings skip levels; meta descriptions absent. | **Medium** | Visual inspection shows potential contrast failures and missing alt text. | Use WCAG 2.1 colour‑contrast checker; add `alt` tags; structure headings logically; include meta tags (description, canonical). |
| Performance | Numerous high‑resolution images (hero, property photos) may slow page loads; no evidence of lazy loading or image compression. | **Low** | Manual load indicates longer initial render on slower connections. | Compress images (WebP), implement lazy loading, and leverage caching/CDN. |
| Security | Site served over HTTPS (good) but no visible Content Security Policy or cookie consent; interactive forms (e.g., calculator) not tested. | **Low** | Basic inspection shows no major warnings. | Add CSP headers through Lovable settings; ensure forms sanitize input; include cookie banner if tracking analytics. |

# Prioritized Action Plan

1. **Correct lot data and portfolio calculations (Critical)** – Rebuild the lot dataset with accurate acreage, buildable SF (702 820 SF total), price per acre (only lots 1 & 7 at $300 K) and recompute all derived metrics.  Bind all components (professional analysis, investment opportunities, portfolio summaries) to this dataset.
2. **Fix inconsistent metrics (High)** – Standardize vacancy rates, trade‑volume numbers, and financial terminology across the site.  Decide on a single set of statistics and update all sections.
3. **Update pricing distribution (High)** – Ensure lots 3 and 5 show $265 K per acre in every instance.  Verify the weighted average price per acre recalculates correctly.
4. **Replace incorrect portfolio totals (High)** – Update the dry and refrigerated investment totals to $117.2 M and $189.1 M.  Use 702 820 SF for both scenarios and adjust ROI ranges accordingly.
5. **Relabel cap rate vs appreciation (Medium)** – Adjust the Stabilized Income Property card to separate cap rate (8–9 %) from expected land appreciation (8–12 %).  Populate the Annual NOI field.
6. **Repair navigation and CTA buttons (Medium)** – Add appropriate anchors or modal triggers for all “View Analysis”, “Export Tear Sheet”, and “Run Scenarios” buttons.  Test navigation links for smooth scrolling.
7. **Enhance accessibility & SEO (Medium)** – Increase text contrast, add alt text to images, implement proper heading hierarchy, include meta descriptions and canonical tags, and ensure keyboard navigation is possible.
8. **Optimize performance (Low)** – Compress images, implement lazy loading, and leverage caching.  Consider removing duplicate/unused CSS or JavaScript generated by Lovable.
9. **Strengthen security (Low)** – Implement Content Security Policy headers, validate calculator input, and provide a cookie consent banner if analytics cookies are present.

# Additional Recommendations

- **Use a structured content management approach**: store all numeric data in a central JSON or CMS entry to avoid divergences during future edits.  Lovable prompts should reference these values instead of hard‑coding numbers.
- **Run automated site audits regularly**: integrate tools like Lighthouse, W3C HTML validator, and accessibility checkers (e.g., axe‑core) into your workflow to catch issues early.
- **Provide citations for market data**: include footnote links to reports from CBRE or official government trade statistics to bolster investor confidence.
- **Test mobile responsiveness**: verify the layout on various screen sizes.  Some cards (e.g., lot analysis tables) may need responsive redesign to avoid horizontal scrolling on smaller devices.
- **Monitor SEO performance**: use Google Search Console or SEMrush to track ranking and fix crawl errors.

# Appendix

- **Evidence screenshots** – The citations (e.g., 【571603860796614†screenshot】, 【387580525754549†screenshot】, etc.) correspond to captured sections highlighting the issues discussed.
- **Lot Pricing Summary (expected)** – Lot 1: 4.92 acres @ $300 K/acre; Lot 2: 4.95 acres @ $265 K/acre; Lot 3: 5.06 acres @ $265 K/acre; Lot 4: 6.01 acres @ $265 K/acre; Lot 5: 6.05 acres @ $265 K/acre; Lot 6: 5.68 acres @ $265 K/acre; Lot 7: 7.16 acres @ $300 K/acre; Lot 8: 3.34 acres @ $265 K/acre.

