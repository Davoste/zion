
import React from 'react';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import { ChurchEvent } from '../types';

const MOCK_EVENTS: ChurchEvent[] = [
  // {
  //   id: '1',
  //   title: 'Youth Summer Kickoff',
  //   date: 'June 15, 2024',
  //   time: '6:30 PM - 8:30 PM',
  //   location: 'The Loft @ Elysian',
  //   category: 'Youth',
  //   image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800'
  // },
  {
    id: '1',
    title: 'Members Baptism',
    date: 'June 15, 2025',
    time: '8:30 AM - 4:30 PM',
    location: 'The water tower',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Community Outreach: CRUSADE',
    date: 'June 22, 2025',
    time: '6:00 PM - 11:00 PM',
    location: 'Shopping Center',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Ordaination',
    date: 'July 10, 2025',
    time: '8:00 AM',
    location: 'Main Church',
    category: 'Small Group',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800'
  }
];

const EventCalendar: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-stone-500 uppercase tracking-widest text-xs font-bold mb-4 block">Get Involved</span>
          <h2 className="text-4xl md:text-5xl font-bold serif">Recent Events</h2>
        </div>

        <div className="space-y-6">
          {MOCK_EVENTS.map((event) => (
            <div key={event.id} className="bg-white rounded-3xl p-4 md:p-6 shadow-sm border border-stone-200 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-8 items-center group">
              <div className="w-full md:w-64 h-48 rounded-2xl overflow-hidden shrink-0">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${
                    event.category === 'Youth' ? 'bg-blue-100 text-blue-700' :
                    event.category === 'Community' ? 'bg-green-100 text-green-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {event.category}
                  </span>
                  <span className="text-stone-400 font-medium text-sm">{event.date}</span>
                </div>
                <h3 className="text-2xl font-bold serif">{event.title}</h3>
                <div className="flex flex-wrap gap-6 text-stone-500 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {event.location}
                  </div>
                </div>
              </div>
              <button className="w-full md:w-auto px-8 py-4 bg-stone-100 text-stone-900 rounded-full font-bold hover:bg-stone-900 hover:text-white transition-all flex items-center justify-center gap-2">
                Details
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-4 border-2 border-stone-200 rounded-full font-bold text-stone-900 hover:bg-stone-200 transition-all">
            Full Calendar
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventCalendar;
