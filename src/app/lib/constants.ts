export enum CustomerStatus {
  Attending = "attending",
  Booked = "booked",
  Cancelled = "cancelled",
  CheckedIn = "checked in",
  Closed = "closed",
  Discharged = "discharged",
  Pending = "pending",
}

export enum AgentStatus {
  Active = "active",
  Away = "away",
  Offline = "offline",
}

export enum Links {
  Dashboard = "Dashboard",
  Pending = "Pending",
  Customers = "Customers",
  Chat = "Chat",
  Resolved = "Resolved",
  Templates = "Templates",
  Settings = "Settings",
  Logout = "Logout",
  Agents = "Agents",
  Cases = "Cases",
  Messages = "Messages",
}

export enum Role {
  Agent = "agent",
  Supervisor = "supervisor",
  Admin = "admin",
  Customer = "customer",
}

const getDefaultLinks = (role: Role) => {
  const DEFAULT_LINKS = {
    [Links.Templates]: {
      name: Links.Templates,
      pathname: `/${role}/templates`,
      title: Links.Templates,
    },
    [Links.Settings]: {
      name: Links.Settings,
      pathname: `/${role}/settings`,
      title: Links.Settings,
    },
    [Links.Logout]: {
      name: Links.Logout,
      pathname: "/",
      title: Links.Logout,
    },
  };

  return DEFAULT_LINKS;
};

export const AgentLinks = {
  [Links.Dashboard]: {
    name: Links.Dashboard,
    pathname: "/agent",
    title: Links.Dashboard,
  },
  [Links.Pending]: {
    name: Links.Pending,
    pathname: "/agent/pending",
    title: `${Links.Pending} Requests`,
  },
  [Links.Customers]: {
    name: Links.Customers,
    pathname: "/agent/customers",
    title: Links.Customers,
  },
  [Links.Chat]: {
    name: Links.Chat,
    pathname: "/agent/chat",
    title: Links.Chat,
  },
  [Links.Resolved]: {
    name: Links.Resolved,
    pathname: "/agent/resolved",
    title: `${Links.Resolved} Cases`,
  },
  ...getDefaultLinks(Role.Agent),
};

export enum ChatLinks {
  Collaborations = "Collaborations",
  Customers = "Customers",
  Escalations = "Escalations",
  InMail = "in-Mail",
  EscalatedCases = "Escalated cases",
}

export const AgentLinksChat = {
  [ChatLinks.Collaborations]: "/agent/chat/collaborations",
  [ChatLinks.Customers]: "/agent/chat/customers",
  [ChatLinks.Escalations]: "/agent/chat/escalations",
};

export enum SettingsLinks {
  Account = "Account",
  Security = "Security",
}

export const AgentLinksSettings = {
  [SettingsLinks.Account]: {
    name: SettingsLinks.Account,
    href: "/agent/settings/account",
  },
  [SettingsLinks.Security]: {
    name: SettingsLinks.Security,
    href: "/agent/settings/security",
  },
};

export enum SettingsSecurityLinks {
  EmailPreference = "Email Preference",
  AccountPassword = "Account Password",
}

export const AgentLinksSettingsSecurity = {
  [SettingsSecurityLinks.EmailPreference]: {
    name: SettingsSecurityLinks.EmailPreference,
    href: "/agent/settings/security/email-preference",
  },
  [SettingsSecurityLinks.AccountPassword]: {
    name: SettingsSecurityLinks.AccountPassword,
    href: "/agent/settings/security/account-password",
  },
};

export const SupervisorLinks = {
  [Links.Dashboard]: {
    name: Links.Dashboard,
    pathname: "/supervisor",
    title: Links.Dashboard,
  },
  [Links.Agents]: {
    name: Links.Agents,
    pathname: "/supervisor/agents",
    title: Links.Agents,
  },
  [Links.Customers]: {
    name: Links.Customers,
    pathname: "/supervisor/customers",
    title: Links.Customers,
  },
  [Links.Cases]: {
    name: Links.Cases,
    pathname: "/supervisor/cases",
    title: Links.Cases,
  },
  [Links.Chat]: {
    name: Links.Messages,
    pathname: "/supervisor/messages",
    title: Links.Messages,
  },
  ...getDefaultLinks(Role.Supervisor),
};

export const SupervisorLinksChat = {
  [ChatLinks.Customers]: "/supervisor/messages/customers",
  [ChatLinks.InMail]: "/supervisor/messages/in-mail",
  [ChatLinks.Escalations]: "/supervisor/messages/escalated-cases",
};

enum CasesLinks {
  Pending = "Pending",
  Attending = "Attending",
  Closed = "Closed",
}

export const SupervisorLinksCases = {
  [CasesLinks.Pending]: "/supervisor/cases/pending",
  [CasesLinks.Attending]: "/supervisor/cases/attending",
  [CasesLinks.Closed]: "/supervisor/cases/closed",
};