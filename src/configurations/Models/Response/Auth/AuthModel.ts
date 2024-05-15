
interface Address {
  uuid: string;
  city: string;
  state: string;
  zipcode: string;
  address: string;
}

interface Card {
  type: string;
  payment_source: string;
  last_four: string;
}

interface QuickLink {
  id: number;
  name: string;
  link: string;
  deleted_at: string | null;
  permissions: string[];
}

interface Advisor {
  uuid: string;
  name: string;
  email: string;
  instagram: string;
  affiliate_code: string;
  phone: string;
  avatar: string;
  scheduling_link: string;
  facebook_link: string;
  advisor_message: string;
}

interface Affiliate {
  uuid: string;
  name: string;
  email: string;
  instagram: string;
  affiliate_code: string;
  phone: string;
  avatar: string;
  scheduling_link: string;
  facebook_link: string;
  advisor_message: string;
}

interface PromoteSettings {
  display_name: string;
  display_text: string;
  head_code: string | null;
  body_code: string | null;
}

interface MasterClassFunnel {
  welcome: string;
  webinar: string;
  checkout: string;
}

interface LiveOpportunityCallFunnel {
  welcome: string;
  webinar: string;
  checkout: string;
}

interface Notifications {
  lead_email: boolean;
  lead_sms: boolean;
  mem_email: boolean;
  mem_sms: boolean;
  event_email: boolean;
  event_sms: boolean;
}

interface ActiveSubscription {
  plan_id: string;
  subscription_id: string;
  title: string;
  amount: number;
  interval: string;
  status: string;
  trail_end_at: string | null;
  subscription_ends_at: string | null;
  subscribed_at: string;
}

interface UserData {
  uuid: string;
  name: string;
  email: string;
  instagram: string;
  affiliate_code: string;
  funnel_type: string;
  phone: string;
  avatar: string;
  joined_at: string;
  promote_watched: boolean;
  scheduling_link: string;
  facebook_link: string;
  paypal_account: string;
  advisor_message: string;
  quick_links: QuickLink[];
  address: Address;
  card: Card;
  is_onboarding_completed: boolean;
  onboarding_steps_state: {
    welcome_video_watched: boolean;
    questionnaire_completed: boolean;
    meeting_scheduled: boolean;
    joined_facebook_group: boolean;
  };
  advisor: Advisor;
  affiliate: Affiliate;
  promote_settings: PromoteSettings;
  master_class_funnel: MasterClassFunnel;
  live_opportunity_call_funnel: LiveOpportunityCallFunnel;
  notifications: Notifications;
  permissions: string[];
  has_active_subscription: boolean;
  active_subscription: ActiveSubscription;
}

interface SignInResponse {
  status: boolean;
  message: string;
  data: {
    auth_token: string;
    exp: number;
    user: UserData;
  };
}
