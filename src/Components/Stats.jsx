import React from "react";
import { Heart, Users, Star, Snowflake } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Heart,
      number: "500+",
      label: "Happy Pets Served",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-300",
      iconBg: "bg-blue-100",
      delay: "0s",
    },
    {
      icon: Users,
      number: "30+",
      label: "Certified Groomers & Vets",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-300",
      iconBg: "bg-purple-100",
      delay: "0.2s",
    },
    {
      icon: Star,
      number: "1200+",
      label: "5-Star Reviews",
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-50 to-orange-50",
      borderColor: "border-amber-300",
      iconBg: "bg-amber-100",
      delay: "0.4s",
    },
  ];

  return (
    <div className="mt-8 relative">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Why <span className="text-accent">Choose Us?</span>
      </h1>

      <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${stat.bgColor} rounded-2xl p-8 border-2 ${stat.borderColor} hover:border-opacity-0 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden`}
              style={{
                animationDelay: stat.delay,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
              ></div>

              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Snowflake className="w-24 h-24 text-current" />
              </div>

              <div className="relative flex flex-col items-center text-center space-y-4">
                <div
                  className={`${stat.iconBg} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    className={`w-8 h-8`}
                    strokeWidth={2.5}
                    style={{
                      stroke: `url(#gradient-${index})`,
                      fill: "none",
                    }}
                  />
                  <svg width="0" height="0" style={{ position: "absolute" }}>
                    <defs>
                      <linearGradient
                        id={`gradient-${index}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor={
                            index === 0
                              ? "#3b82f6"
                              : index === 1
                              ? "#a855f7"
                              : "#f59e0b"
                          }
                        />
                        <stop
                          offset="100%"
                          stopColor={
                            index === 0
                              ? "#06b6d4"
                              : index === 1
                              ? "#ec4899"
                              : "#f97316"
                          }
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div
                  className={`text-5xl md:text-6xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.number}
                </div>

                <div className="text-slate-700 font-semibold text-lg leading-tight">
                  {stat.label}
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 -skew-x-12 group-hover:animate-shine"></div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shine {
          from {
            transform: translateX(-100%) skewX(-12deg);
          }
          to {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Stats;
