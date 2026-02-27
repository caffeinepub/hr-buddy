# Specification

## Summary
**Goal:** Add a functional "Schedule a Demo" booking form to the HR Buddy marketing site, backed by persistent Motoko storage.

**Planned changes:**
- Add a new "Schedule a Demo" form section to the landing page with fields: full name, work email, company name, team size (dropdown: 1–10, 11–50, 51–200, 200+), and preferred contact time
- Implement client-side validation (required fields, valid email format) and display an inline success message on submission without a page reload
- Smooth-scroll the existing CTA "Schedule a Demo" button to the new form section, and add the section as a navbar link
- Add a `DemoRequest` record type and stable variable to `backend/main.mo`, with `submitDemoRequest` (update) and `getAllDemoRequests` (query) methods
- Add a `useSubmitDemoRequest` React Query mutation hook to `frontend/src/hooks/useQueries.ts` that calls the backend `submitDemoRequest` method
- Handle loading and error states in the form component

**User-visible outcome:** Visitors can fill out and submit a demo booking form on the landing page; submissions are stored in the backend and the user sees a confirmation message upon success.
