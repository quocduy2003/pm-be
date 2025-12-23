import type { Schema, Struct } from '@strapi/strapi';

export interface ContactContactBanner extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_banners';
  info: {
    displayName: 'Contact Banner';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContactContactForm extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_forms';
  info: {
    displayName: 'Contact Form';
  };
  attributes: {
    service: Schema.Attribute.Component<'contact.service', true>;
  };
}

export interface ContactContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_infos';
  info: {
    displayName: 'ContactInfo';
  };
  attributes: {
    social: Schema.Attribute.Component<'contact.social', true>;
    title: Schema.Attribute.String;
  };
}

export interface ContactService extends Struct.ComponentSchema {
  collectionName: 'components_contact_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ContactSocial extends Struct.ComponentSchema {
  collectionName: 'components_contact_socials';
  info: {
    displayName: 'Social';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomeBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_home_banners';
  info: {
    displayName: 'Home Banner';
  };
  attributes: {
    features: Schema.Attribute.Text;
    main_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    sub_images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomeEquipment extends Struct.ComponentSchema {
  collectionName: 'components_home_home_equipments';
  info: {
    displayName: 'Home Equipment';
  };
  attributes: {
    description: Schema.Attribute.Text;
    machines: Schema.Attribute.Component<'home.machine', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomeExperience extends Struct.ComponentSchema {
  collectionName: 'components_home_home_experiences';
  info: {
    displayName: 'Home Experience';
  };
  attributes: {
    description: Schema.Attribute.Text;
    projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomeNews extends Struct.ComponentSchema {
  collectionName: 'components_home_home_news';
  info: {
    displayName: 'Home News';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomeProcess extends Struct.ComponentSchema {
  collectionName: 'components_home_home_processes';
  info: {
    displayName: 'Home Process';
  };
  attributes: {
    steps: Schema.Attribute.Component<'home.steps', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomeProduct extends Struct.ComponentSchema {
  collectionName: 'components_home_home_products';
  info: {
    displayName: 'Home Product';
  };
  attributes: {
    description: Schema.Attribute.Text;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomeService extends Struct.ComponentSchema {
  collectionName: 'components_home_home_services';
  info: {
    displayName: 'Home Service';
  };
  attributes: {
    featured_services: Schema.Attribute.Relation<
      'oneToMany',
      'api::service.service'
    >;
    other_services: Schema.Attribute.Relation<
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface HomeHomeStory extends Struct.ComponentSchema {
  collectionName: 'components_home_home_stories';
  info: {
    displayName: 'Home Story';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomeTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_home_home_testimonials';
  info: {
    displayName: 'Home Testimonial';
  };
  attributes: {
    description: Schema.Attribute.Text;
    reviews: Schema.Attribute.Component<'shared.testimonial-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomeWelcome extends Struct.ComponentSchema {
  collectionName: 'components_home_home_welcomes';
  info: {
    displayName: 'Home Welcome';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomeWhyChoose extends Struct.ComponentSchema {
  collectionName: 'components_home_home_why_chooses';
  info: {
    displayName: 'Home Why Choose';
  };
  attributes: {
    commitment_title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'home.why-choose-feature', true>;
    stats: Schema.Attribute.Component<'home.why-choose-stat', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeMachine extends Struct.ComponentSchema {
  collectionName: 'components_home_machines';
  info: {
    displayName: 'Machine';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface HomeSteps extends Struct.ComponentSchema {
  collectionName: 'components_home_steps';
  info: {
    displayName: 'Steps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeWhyChooseFeature extends Struct.ComponentSchema {
  collectionName: 'components_home_why_choose_features';
  info: {
    displayName: 'WhyChooseFeature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeWhyChooseStat extends Struct.ComponentSchema {
  collectionName: 'components_home_why_choose_stats';
  info: {
    displayName: 'WhyChooseStat';
  };
  attributes: {
    color: Schema.Attribute.String;
    label: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

export interface ServiceContentService extends Struct.ComponentSchema {
  collectionName: 'components_service_content_services';
  info: {
    displayName: 'Content Service';
  };
  attributes: {
    banner_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    body: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    intro_title: Schema.Attribute.String;
  };
}

export interface ServiceFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_service_feature_items';
  info: {
    displayName: 'Service';
  };
  attributes: {
    content: Schema.Attribute.String;
  };
}

export interface ServiceHeroFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_service_hero_feature_items';
  info: {
    displayName: 'Hero Feature Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ServiceHeroService extends Struct.ComponentSchema {
  collectionName: 'components_service_hero_services';
  info: {
    displayName: 'Hero Service';
  };
  attributes: {
    features: Schema.Attribute.Component<'service.hero-feature-item', true>;
    main_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ServiceHomeService extends Struct.ComponentSchema {
  collectionName: 'components_service_home_services';
  info: {
    displayName: 'Home Service';
  };
  attributes: {
    main_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ServicePortService extends Struct.ComponentSchema {
  collectionName: 'components_service_port_services';
  info: {
    displayName: 'Port Service';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedContactBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_banners';
  info: {
    displayName: 'ContactBanner';
  };
  attributes: {
    description: Schema.Attribute.Text;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTestimonialItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonial_items';
  info: {
    displayName: 'TestimonialItem';
  };
  attributes: {
    author_name: Schema.Attribute.String;
    author_position: Schema.Attribute.String;
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    content: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact.contact-banner': ContactContactBanner;
      'contact.contact-form': ContactContactForm;
      'contact.contact-info': ContactContactInfo;
      'contact.service': ContactService;
      'contact.social': ContactSocial;
      'home.home-banner': HomeHomeBanner;
      'home.home-equipment': HomeHomeEquipment;
      'home.home-experience': HomeHomeExperience;
      'home.home-news': HomeHomeNews;
      'home.home-process': HomeHomeProcess;
      'home.home-product': HomeHomeProduct;
      'home.home-service': HomeHomeService;
      'home.home-story': HomeHomeStory;
      'home.home-testimonial': HomeHomeTestimonial;
      'home.home-welcome': HomeHomeWelcome;
      'home.home-why-choose': HomeHomeWhyChoose;
      'home.machine': HomeMachine;
      'home.steps': HomeSteps;
      'home.why-choose-feature': HomeWhyChooseFeature;
      'home.why-choose-stat': HomeWhyChooseStat;
      'service.content-service': ServiceContentService;
      'service.feature-item': ServiceFeatureItem;
      'service.hero-feature-item': ServiceHeroFeatureItem;
      'service.hero-service': ServiceHeroService;
      'service.home-service': ServiceHomeService;
      'service.port-service': ServicePortService;
      'shared.contact-banner': SharedContactBanner;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.testimonial-item': SharedTestimonialItem;
    }
  }
}
