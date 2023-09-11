"use client";
import IconText from "./iconText";
import { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import classNames from "classnames";
import ProgressBar from "./progressBar";

interface ISkillMeterProps {
  icon?: React.ReactNode;
  score: number;
  label: React.ReactNode;
  className?: string;
  tags?: string[];
}

export default function SkillMeter({
  icon,
  score,
  label,
  className,
  tags,
}: ISkillMeterProps) {
  return (
    <div className={classNames("skill-meter", className)}>
      {icon && <span className="icon">{icon}</span>}
      <div className="body">
        <h3 className="mb-1 fixed">{label}</h3>
        <ProgressBar hideValue value={score} />
        <div className="tag-cloud">
          {tags?.map((tag, i) => (
            <small key={tag} className="tag">
              {tag}
            </small>
          ))}
        </div>
      </div>
    </div>
  );
}
