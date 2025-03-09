'use client';

// Define the type for row layouts
export type RowLayoutType = 'two-small-one-big' | 'one-big-two-small';

// Define an interface for image objects
export interface ImageObject {
    src: string;
    alt: string;
}

// Define an interface for gallery row
export interface GalleryRowConfig {
    layout: RowLayoutType;
    images: {
        small1: ImageObject;
        small2: ImageObject;
        big: ImageObject;
    };
}

// Interface for gallery data by category
export interface GalleryDataByCategory {
    [key: string]: GalleryRowConfig[];
}

// Main gallery data object with all categories
export const galleryData: GalleryDataByCategory = {
    'Weddings': [
        {
            layout: 'two-small-one-big',
            images: {
                small1: {
                    src: '/assets/wedding-reception.png',
                    alt: 'Elegant wedding reception setup'
                },
                small2: {
                    src: '/assets/couple-portrait.png',
                    alt: 'Wedding couple portrait'
                },
                big: {
                    src: '/assets/wedding-couple.png',
                    alt: 'Beautiful couple portrait at wedding ceremony'
                }
            }
        },
        {
            layout: 'one-big-two-small',
            images: {
                big: {
                    src: '/assets/garden-setup.png',
                    alt: 'Garden wedding setup with floral arrangements'
                },
                small1: {
                    src: '/assets/traditional-wedding.png',
                    alt: 'Traditional wedding ceremony with couple'
                },
                small2: {
                    src: '/assets/wedding-stage.png',
                    alt: 'Decorated wedding stage with lighting'
                }
            }
        },
        {
            layout: 'two-small-one-big',
            images: {
                small1: {
                    src: '/assets/men-in-suits.png',
                    alt: 'Men in suits at wedding ceremony'
                },
                small2: {
                    src: '/assets/man-in-tux.png',
                    alt: 'Groom in tuxedo posing'
                },
                big: {
                    src: '/assets/bride-in-dress.png',
                    alt: 'Beautiful bride in wedding dress'
                }
            }
        },
        {
            layout: 'one-big-two-small',
            images: {
                big: {
                    src: '/assets/reception-tables-1.png',
                    alt: 'Elegant reception table setting with centerpieces'
                },
                small1: {
                    src: '/assets/reception-tables-2.png',
                    alt: 'Banquet hall setup for wedding reception'
                },
                small2: {
                    src: '/assets/table-centerpiece.png',
                    alt: 'Floral table centerpiece design with candles'
                }
            }
        },
        {
            layout: 'two-small-one-big',
            images: {
                small1: {
                    src: '/assets/wedding-seating.png',
                    alt: 'Wedding ceremony seating arrangement'
                },
                small2: {
                    src: '/assets/traditional-couple-1.png',
                    alt: 'Traditional couple in ceremonial attire'
                },
                big: {
                    src: '/assets/traditional-couple-2.png',
                    alt: 'Traditional couple in purple ceremonial attire'
                }
            }
        }
    ],
    'Corporate Events': [
        {
            layout: 'two-small-one-big',
            images: {
                small1: {
                    src: '/assets/corporate-meeting.png',
                    alt: 'Business professionals in corporate meeting'
                },
                small2: {
                    src: '/assets/corporate-presentation.png',
                    alt: 'Executive giving presentation at corporate event'
                },
                big: {
                    src: '/assets/corporate-conference.png',
                    alt: 'Large corporate conference with attendees'
                }
            }
        },
        {
            layout: 'one-big-two-small',
            images: {
                big: {
                    src: '/assets/corporate-award.png',
                    alt: 'Formal corporate gala dinner event'
                },
                small1: {
                    src: '/assets/corporate-gala.png',
                    alt: 'Professionals networking at corporate event'
                },
                small2: {
                    src: '/assets/corporate-networking.png',
                    alt: 'Corporate award ceremony celebration'
                }
            }
        },
        {
            layout: 'two-small-one-big',
            images: {
                small1: {
                    src: '/assets/corporate-setup.png',
                    alt: 'Corporate event venue setup'
                },
                small2: {
                    src: '/assets/corporate-team.png',
                    alt: 'Corporate team building activities'
                },
                big: {
                    src: '/assets/corporate-exhibition.png',
                    alt: 'Corporate exhibition with product displays'
                }
            }
        },
        {
            layout: 'one-big-two-small',
            images: {
                big: {
                    src: '/assets/corporate-speech.png',
                    alt: 'Elegant corporate dinner arrangement'
                },
                small1: {
                    src: '/assets/corporate-speaker.png',
                    alt: 'Keynote speaker at corporate event'
                },
                small2: {
                    src: '/assets/corporate-members.png',
                    alt: 'Corporate event reception area'
                }
            }
        }
    ],
    'Birthday Celebrations': [
        {
            layout: 'two-small-one-big',
            images: {
                small1: {
                    src: '/assets/birthday-dinner.png',
                    alt: 'Elaborately decorated birthday cake'
                },
                small2: {
                    src: '/assets/birthday-decor.png',
                    alt: 'Festive birthday party decorations'
                },
                big: {
                    src: '/assets/birthday-celebration.png',
                    alt: 'Friends celebrating at birthday party'
                }
            }
        },
        {
            layout: 'one-big-two-small',
            images: {
                big: {
                    src: '/assets/birthday-venue.png',
                    alt: 'Decorated venue for birthday celebration'
                },
                small1: {
                    src: '/assets/social-drinks.png',
                    alt: 'Birthday toast celebration with champagne'
                },
                small2: {
                    src: '/assets/birthday-setup.png',
                    alt: 'Wrapped birthday gifts and presents'
                }
            }
        },
        {
            layout: 'two-small-one-big',
            images: {
                small1: {
                    src: '/assets/birthday-chef.png',
                    alt: 'Colorful balloon arrangements for birthday'
                },
                small2: {
                    src: '/assets/birthday-food.png',
                    alt: 'Gourmet food display at birthday event'
                },
                big: {
                    src: '/assets/birthday-theme.png',
                    alt: 'Themed birthday party celebration'
                }
            }
        },
        {
            layout: 'one-big-two-small',
            images: {
                big: {
                    src: '/assets/birthday-entertainment.png',
                    alt: 'Entertainment performance at birthday celebration'
                },
                small1: {
                    src: '/assets/birthday-invite.png',
                    alt: 'Child celebrating birthday with friends'
                },
                small2: {
                    src: '/assets/social-charity.png',
                    alt: 'Adult milestone birthday celebration'
                }
            }
        }
    ],
    'Luxury Dining': [
        {
            layout: 'two-small-one-big',
            images: {
                small1: {
                    src: '/assets/luxury-table.png',
                    alt: 'Luxury table setting with fine china'
                },
                small2: {
                    src: '/assets/luxury-service.png',
                    alt: 'Premium wine selection for luxury dining'
                },
                big: {
                    src: '/assets/luxury-dining-room.png',
                    alt: 'Elegant luxury dining room setup'
                }
            }
        },
        {
            layout: 'one-big-two-small',
            images: {
                big: {
                    src: '/assets/luxury-dining.png',
                    alt: 'Gourmet luxury food presentation'
                },
                small1: {
                    src: '/assets/birthday-theme.png',
                    alt: 'Private chef preparing luxury dining experience'
                },
                small2: {
                    src: '/assets/luxury-seating.png',
                    alt: 'Elegant dessert presentation for luxury dining'
                }
            }
        },
        {
            layout: 'two-small-one-big',
            images: {
                small1: {
                    src: '/assets/luxury-drinks.png',
                    alt: 'Signature cocktails for luxury dining event'
                },
                small2: {
                    src: '/assets/luxury-decoration.png',
                    alt: 'Luxurious table decorations and florals'
                },
                big: {
                    src: '/assets/luxury-private-dining.png',
                    alt: 'Private luxury dining experience'
                }
            }
        },
        {
            layout: 'one-big-two-small',
            images: {
                big: {
                    src: '/assets/luxury-ambiance.png',
                    alt: 'Exclusive venue for luxury dining event'
                },
                small1: {
                    src: '/assets/luxury-service.png',
                    alt: 'White glove service at luxury dining event'
                },
                small2: {
                    src: '/assets/luxury-venue.png',
                    alt: 'Ambient lighting for luxury dining experience'
                }
            }
        }
    ],
    'Social Events': [
        {
            layout: 'two-small-one-big',
            images: {
                small1: {
                    src: '/assets/social-dance.png',
                    alt: 'Cocktail reception at social gathering'
                },
                small2: {
                    src: '/assets/social-cocktails.png',
                    alt: 'Guests networking at social event'
                },
                big: {
                    src: '/assets/social-gala.png',
                    alt: 'Formal gala social event'
                }
            }
        },
        {
            layout: 'one-big-two-small',
            images: {
                big: {
                    src: '/assets/social-charity.png',
                    alt: 'Charity fundraiser social event'
                },
                small1: {
                    src: '/assets/social-music.png',
                    alt: 'Live music performance at social gathering'
                },
                small2: {
                    src: '/assets/social-interaction.png',
                    alt: 'Dance floor at social event'
                }
            }
        },
        {
            layout: 'two-small-one-big',
            images: {
                small1: {
                    src: '/assets/social-setup.png',
                    alt: 'Social event venue setup'
                },
                small2: {
                    src: '/assets/social-group.png',
                    alt: 'Group photo at social event'
                },
                big: {
                    src: '/assets/social-celebration.png',
                    alt: 'Celebration moment at social gathering'
                }
            }
        },
        {
            layout: 'one-big-two-small',
            images: {
                big: {
                    src: '/assets/social-dancers.png',
                    alt: 'Decorative elements for social event'
                },
                small1: {
                    src: '/assets/birthday-food.png',
                    alt: 'Food display at social gathering'
                },
                small2: {
                    src: '/assets/social-drinks.png',
                    alt: 'Beverage station at social event'
                }
            }
        }
    ]
};

// Category descriptions
export const categoryDescriptions: { [key: string]: string } = {
    'Weddings': 'Jennywealth Events Management brings creativity and excellence to every wedding. Our team ensures that each event is tailored to reflect your unique style and preferences, creating memorable experiences for you and your guests.',
    'Corporate Events': 'Our corporate event management services deliver professional and impactful business gatherings. From conferences and team-building to product launches and galas, we handle every detail with precision and elegance.',
    'Birthday Celebrations': 'Make your birthday truly special with our personalized celebration planning. Whether it\'s an intimate gathering or a grand party, we create joyful experiences that celebrate you in style.',
    'Luxury Dining': 'Experience culinary excellence with our luxury dining events. We combine exquisite food presentation, premium service, and elegant settings to create unforgettable gastronomic journeys for you and your guests.',
    'Social Events': 'From fundraisers to seasonal celebrations, our social event planning services bring people together in style. We create engaging environments where connections flourish and memories are made.'
};

export default galleryData;