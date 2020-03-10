import React, { FC } from "react"

import { Breadcrumb } from "../Breadcrumb"
import { StackedAvatars } from "../StackedAvatars"
import * as SC from "./styles"
import { Container } from "../Container"

interface IHeaderProps {
  relativePath: string
  basePath: string
  title: string
  authors?: {
    avatar: string
    hash: string
    name: string
  }[]
  createdAt: string
  timeToRead: number
  recommendedReading?: string[]
  externalResources?: string[]
}

export const Header: FC<IHeaderProps> = ({
  basePath,
  relativePath,
  title,
  authors,
  createdAt,
  timeToRead,
}) => {
  const date = new Date(createdAt)
  const month = date.toLocaleString("default", { month: "long" })
  const day = date.getDate()
  const year = date.getUTCFullYear()
  const dateToHuman = `${month} ${day}, ${year}`

  return (
    <SC.HeaderWrapper>
      <SC.BackgroundWrapper>
        <SC.StyledWavesBottom />
        <SC.StyledWavesTop />
        <SC.StyledCircles />
      </SC.BackgroundWrapper>

      <Container>
        <SC.Box>
          <Breadcrumb relativePath={relativePath} basePath={basePath} />

          <SC.Title>{title}</SC.Title>

          <SC.Top>
            {authors && (
              <SC.Meta>
                <StackedAvatars authors={authors} />
                <SC.PopoverToggler>
                  {authors.length} contributor{authors.length > 1 && "s"}
                  <SC.Popover>
                    {authors
                      .map(author => `${author.name}#${author.hash}`)
                      .join(", ")}
                  </SC.Popover>
                </SC.PopoverToggler>
              </SC.Meta>
            )}
            {dateToHuman && <SC.Meta>{dateToHuman}</SC.Meta>}
            <SC.Meta>
              {timeToRead} minute{timeToRead !== 1 && "s"} read time
            </SC.Meta>
          </SC.Top>
        </SC.Box>
      </Container>
    </SC.HeaderWrapper>
  )
}
